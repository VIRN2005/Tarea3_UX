import React, { useState } from "react";
import ToDo_Form from "./ToDo_Form";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
uuidv4();

const ToDo_Stuff = () => {
  const [ToDos, SetToDo] = useState([]);

  const addToDo = (ToDos) => {
    SetToDo([
      ...ToDos,
      { id: uuidv4(), task: ToDos, completed: false, isEditing: false },
    ]);
    console.log(ToDo);
  };

  return (
    <div className="ToDo_Stuff">
      <ToDo_Form addToDo={addToDo} />
      <ToDo />
    </div>
  );
};

export default ToDo_Stuff;
