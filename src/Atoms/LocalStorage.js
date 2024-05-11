import React, { useState, useEffect } from "react";
import { TodoForm } from "./ToDo_Form";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./ToDo";
import ToDo_Edit from "./ToDo_Edit";

const LocalStorage = () => {
  const [ToDos, setToDos] = useState([]);

  useEffect(() => {
    const savedToDos = JSON.parse(localStorage.getItem("ToDos")) || [];
    setToDos(savedToDos);
  }, []);

  const addToDo = (ToDo) => {
    const newToDos = [
      ...ToDos,
      { id: uuidv4(), task: ToDo, completed: false, isEditing: false },
    ];
    setToDos(newToDos);
    localStorage.setItem("ToDos", JSON.stringify(newToDos));
  };

  const toggleComplete = (id) => {
    const newToDos = ToDos.map((ToDo) =>
      ToDo.id === id ? { ...ToDo, completed: !ToDo.completed } : ToDo
    );
    setToDos(newToDos);
    localStorage.setItem("ToDos", JSON.stringify(newToDos));
  };

  const deleteToDo = (id) => {
    const newToDos = ToDos.filter((ToDo) => ToDo.id !== id);
    setToDos(newToDos);
    localStorage.setItem("ToDos", JSON.stringify(newToDos));
  };

  const editToDo = (id) => {
    setToDos(
      ToDos.map((ToDo) =>
        ToDo.id === id ? { ...ToDo, isEditing: !ToDo.isEditing } : ToDo
      )
    );
  };

  const editTask = (task, id) => {
    const newToDos = ToDos.map((ToDo) =>
      ToDo.id === id ? { ...ToDo, task, isEditing: false } : ToDo
    );
    setToDos(newToDos);
    localStorage.setItem("ToDos", JSON.stringify(newToDos));
  };

  return (
    <div className="ToDo_Stuff">
      <h1>THINGS TO DO!</h1>
      <TodoForm addToDo={addToDo} />
      {ToDos.map((ToDo) =>
        ToDo.isEditing ? (
          <ToDo_Edit key={ToDo.id} editToDo={editTask} task={ToDo} />
        ) : (
          <Todo
            key={ToDo.id}
            task={ToDo}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        )
      )}
    </div>
  );
};

export default LocalStorage;

