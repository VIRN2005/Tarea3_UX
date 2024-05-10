import React from "react";

const ToDo_Form = () => {
  return (
    <form className="ToDo_Form">
      <input
        type="Text"
        className="ToDo_Edit"
        placeholder="Give me Todays Task"
      />
      <button type="submit" className="ToDo_Btn" />
    </form>
  );
};

export default ToDo_Form;
