import React from 'react';
import classes from "./TodosList.module.scss";
import TodosItem from "../TodosItem/TodosItem";

const TodosList = ({todos, onToggleChange, toggleButton, idForModal, showModal, showDate, setShowDate, onToggleDeadLineInfo, addDeadLine, duplicate, editText}) => {
  return (
    <div className={classes.todos_items}>
      <ul className={classes.todos_list}>
        {todos.map((item, index) =>
          <TodosItem key={index} editText={editText} duplicate={duplicate} addDeadLine={addDeadLine} onToggleDeadLineInfo={onToggleDeadLineInfo}  index={index} item={item} idForModal={idForModal} onToggleChange={onToggleChange}
                     toggleButton={toggleButton} showModal={showModal} showDate={showDate} setShowDate={setShowDate}/>
        )}
      </ul>
    </div>
  );
};

export default TodosList;