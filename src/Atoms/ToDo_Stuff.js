import React, { useState } from "react";
import ToDo_Form from "./ToDo_Form";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import ToDo_Edit from "./ToDo_Edit";

const ToDo_Stuff = () => {
  const [ToDos, SetToDos] = useState([]);

  const addToDo = (ToDo1) => {
    SetToDos([
      ...ToDos,
      { id: uuidv4(), task: ToDo1, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    SetToDos(
      ToDos.map((ToDo) =>
        ToDo.id === id ? { ...ToDo, completed: !ToDo.completed } : ToDo
      )
    );
  };

  const deleteToDo = (id) => {
    SetToDos(ToDos.filter((ToDo) => ToDo.id !== id));
  };

  const editToDo = (id) => {
    SetToDos(
      ToDos.map((ToDo1) =>
        ToDo1.id === id ? { ...ToDo1, isEditing: !ToDo1.isEditing } : ToDo1
      )
    );
  };

  const editTask = (task, id) => {
    SetToDos(
      ToDos.map((ToDo1) =>
        ToDo1.id === id ? { ...ToDo1, task, isEditing: !ToDo1.isEditing } : ToDo1
      )
    );
  };

  return (
    <div className="ToDo_Stuff">
      <h1>THINGS TO DO!</h1>
      <ToDo_Form addToDo={addToDo} />
      {ToDos.map((ToDo1) =>
        ToDo1.isEditing ? (
          <ToDo_Edit editToDo={editTask} task={ToDo1} />
        ) : (
          <ToDo
            task={ToDo1}
            key={ToDo1.id}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        )
      )}
    </div>
  );
};

export default ToDo_Stuff;
