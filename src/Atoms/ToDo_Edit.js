import React from "react";
import { ToDo } from "./ToDo";
import ToDo_Form, { TodoForm } from "./ToDo_Form";
import { v4 as uuidv4 } from "uuid";

export const ToDo_Edit = () => {
  const [ToDo, setToDo] = useState([]);

  const addToDo = (ToDo) => {
    setToDo([
      ...ToDo,
      { id: uuidv4(), task: ToDo, completed: false, isEditing: false },
    ]);
    console.log(ToDo);
  };

  return (
    <div className="ToDo_Stuff">
      <ToDo_Form addToDo={addToDo} />
    </div>
  );
};

export default ToDo_Edit;
