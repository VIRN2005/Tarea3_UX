import React, { useState } from "react";

const ToDo_Form = ({ addToDo }) => {
  const [val, setVal] = useState("");

  const submit = (event) => {
    event.preventDefault();
    addToDo(val);
    setVal("");
  };

  return (
    <form className="ToDo_Form" onSubmit={submit}>
      <input
        type="Text"
        className="ToDo_Edit"
        value={val}
        placeholder="Give me Todays Task"
        onChange={(event) => setVal(event.target.value)}
      />
      <button type="submit" className="ToDo_Btn">
        Add Task
      </button>
    </form>
  );
};

export default ToDo_Form;
