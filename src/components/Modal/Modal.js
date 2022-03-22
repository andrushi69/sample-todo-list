import React from 'react';
import classes from "./Modal.module.scss";
import SVG from "react-inlinesvg";

const Modal = ({closeModal, id, deleteTodo}) => {
  return (
    <div className={classes.modal_overlay}>
      <div className={`${classes.modal} animate__animated animate__fast  animate__zoomIn`}>
        <div className={classes.modal_content}>
          <h1>Are you sure that you want to delete this task?</h1>
          <div className={classes.modal_buttons}>
            <button onClick={() => {
              deleteTodo(id)
              closeModal(false)
            }}>Yes
            </button>
            <button onClick={() => {
              closeModal(false)
            }}>No
            </button>
          </div>
          <div className={classes.close_svg}>
            <SVG onClick={() => {
              closeModal(false)
            }} width={15} height={15} src={"./svg/close.svg"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;