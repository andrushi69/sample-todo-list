import React from 'react';
import classes from "./TodosFilterAndForm.module.scss";

const TodosFilter = ({value, onFilterChange}) => {
  return (
    <form
      className={`${classes.filter_form}  animate__animated animate__fadeInRight animate__fast`}>
      <input
        className={classes.input_field}
        type="text"
        autoComplete="off"
        id={"sub"}
        value={value}
        onChange={(e) => {
          onFilterChange(e)
        }}
        placeholder="Type your task"
      />
      <label htmlFor={"sub"} className={classes.input_label}>Find your task...</label>
    </form>
  );
};

export default TodosFilter;