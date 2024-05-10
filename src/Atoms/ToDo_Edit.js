import React, { useState } from "react";

const ToDo_Edit = ({ editToDo, task }) => {
  const [val, setVal] = useState(task.task);

  const submit = (event) => {
    event.preventDefault();
    if (val) {
      editToDo(val);
      setVal("");
    }
  };

  return (
    <form className="ToDo_Form" onSubmit={submit}>
      <input
        type="Text"
        className="ToDo_Edit"
        value={val}
        placeholder="Update Tasks"
        onChange={(event) => setVal(event.target.value)}
      />
      <button type="submit" className="ToDo_Btn">
        Add Task
      </button>
    </form>
  );
};

export default ToDo_Edit;
