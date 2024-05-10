import React, { useState } from "react";
import ToDo_Form from "./ToDo_Form";
import { v4 as uuidv4 } from "uuid";

uuidv4();

const ToDo_Stuff = () => {
  const [ToDo, SetToDo] = useState([]);

  const addToDo = (ToDo) => {
    SetToDo([
      ...ToDo,
      { id: uuidv4(), task: ToDo, completed: false, isEdit: false },
    ]);
    console.log(ToDo);
  };

  return (
    <div className="ToDo_Stuff">
      <ToDo_Form addToDo={addToDo} />
    </div>
  );
};

export default ToDo_Stuff;
