import React from 'react';
import classes from "./TotalTasks.module.scss";

const TotalTasks = ({totalTask, totalTaskCompleted}) => {
  return (
    <div className={`${classes.total_completed_process} animate__animated animate__fadeInLeft animate__fast`}>
      <span>Total task: {totalTask}</span>
      <span>Total task completed: {totalTaskCompleted}</span>
    </div>
  );
};

export default TotalTasks;