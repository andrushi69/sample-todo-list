import React from 'react';
import classes from "./TodosItem.module.scss";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import DataPicker from "../DataPicker/DataPicker";
import SVG from "react-inlinesvg";
import "animate.css"


const TodosItem = ({
                     item,
                     index,
                     idForModal,
                     onToggleChange,
                     toggleButton,
                     showModal,
                     setShowDate,
                     onToggleDeadLineInfo, addDeadLine,
                     duplicate,
                     editText
                   }) => {
  // const [editable, setEditable] = useState(false)


  return (
    <li key={index}
        className={`${classes.item} ${item.completed ? classes.complete : ""} ${!item.showButton && !item.completed && !item.showDeadLine ? classes.in_process : ""} animate__animated  animate__zoomIn animate__fast`}>
      <div
        className={`${classes.task_text_and_svg_section} ${item.completed ? classes.green : ""}  ${!item.showButton && !item.completed && !item.showDeadLine ? classes.orange : ""}  animate__animated  animate__fadeIn animate__fast`}>
        {/*{editable ? <input className={classes.task_text_edit} onChange={(e)=>{*/}
        {/*    console.log(e.target.value)*/}
        {/*}*/}
        {/*  } value={item.text}/> :*/}
        <span className={classes.task_text}>{item.text}</span>
        {item.text === duplicate[0] ? <span
          className={`${classes.duplicate_text} animate__animated  animate__swing animate__fast animate__infinite`}>Duplicate task name!</span> : ""}
        <div className={classes.svg_section}>
          {/*<div className={classes.edit_svg}><SVG onClick={() => {*/}
          {/*  setEditable(!editable)*/}
          {/*}} src={"svg/edit.svg"} width={15} height={15}/>*/}
          {/*</div>*/}
          <div className={classes.bin_svg}><SVG onClick={() => {
            idForModal(item.id)
            showModal(true)
          }} src={"svg/bin.svg"} width={15} height={15}/></div>
        </div>
      </div>
      {item.showDeadLine ?
        <div className={classes.dead_line_for_task}>
          <DataPicker
            item={item}
            addDeadLine={addDeadLine}
            onToggleDeadLineInfo={onToggleDeadLineInfo}
            setShowDate={setShowDate}
          />
        </div>
        : ""}
      {!item.showDeadLine ? item.deadLine.map((it, index) =>
          <span key={index} className={item.completed ? classes.dead_line_info_completed : classes.dead_line_info}>
                  Deadline to: {it.day < 10 ? "0" + it.day : it.day}.{it.month < 10 ? "0" + it.month : it.month}.{it.year}
              </span>
        )
        : ""}
      {!item.showButton && !item.showDeadLine ?
        <div className={item.deadLine.length > 0 ? classes.status_section_with_dead_line : classes.status_section}>
          <div className={classes.toggle}>
                <span
                  className={!item.completed ? "animate__animated animate__slow  animate__pulse animate__infinite" : "animate__animated animate__tada"}>{item.completed ? "Task completed" : "Task in Process..."}</span>
            <SwitchToggle id={item.id} completedTask={item.completed} completedTaskFunc={(value) => {
              onToggleChange(value)
            }}/>
          </div>
        </div> : ""}
      {item.showButton ? <button className={classes.start_btn} onClick={() => {
        toggleButton(item.id)
      }}>Start doing this task!</button> : ""}
    </li>
  );
};

export default TodosItem;