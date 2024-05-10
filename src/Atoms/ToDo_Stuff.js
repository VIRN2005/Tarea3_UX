import React, { useState } from "react";
import ToDo_Form from "./ToDo_Form";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";

const ToDo_Stuff = () => {
  const [ToDos, SetToDos] = useState([]);

  const addToDo = (ToDo1) => {
    SetToDos([
      ...ToDos,
      { id: uuidv4(), task: ToDo1, completed: false, isEditing: false },
    ]);
  };

  return (
    <div className="ToDo_Stuff">
      <ToDo_Form addToDo={addToDo} />
      {ToDos.map((ToDo1, index) => (
        <ToDo task={ToDo1} key={index} />
      ))}
    </div>
  );
};

export default ToDo_Stuff;
