import React, { useState } from "react";
import "./Form.css";

function Form(props) {
const [name, setName] = useState("");
  
  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="titleBlock">
        <label htmlFor="new-todo-input" className="titleText">
          to do list
        </label>
      </div>
      <input
        type="text"
        id="new-todo-input"
        className="inputForm"
        name="text"
        autoComplete="off"
        placeholder="Add a new task"
        value={name}
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;
