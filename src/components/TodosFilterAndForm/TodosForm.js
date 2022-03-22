import React, { useState} from 'react';
import classes from "./TodosFilterAndForm.module.scss";

const TodosForm = ({onSubmit}) => {
  const [taskName, setTaskName] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    onSubmit(taskName)
    setTaskName("")
  }

  return (
    <form onSubmit={submitHandler} className={`${classes.search_form} animate__animated animate__zoomIn animate__fast`}>
      <input
        className={classes.input_field}
        type="text"
        autoComplete="off"
        id={"sub"}
        value={taskName}
        onChange={(e) => {
          setTaskName(e.target.value)
        }}
        placeholder="Type your task"
      />
      <label htmlFor={"sub"} className={classes.input_label}>Add your task...</label>
      <button disabled={taskName === ""} type="submit">
        <span>Add</span>
      </button>
    </form>
  );
};


export default TodosForm;