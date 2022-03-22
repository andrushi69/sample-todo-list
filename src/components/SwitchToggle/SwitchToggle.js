import React from 'react';

const SwitchToggle = ({completedTask, completedTaskFunc, id}) => {
  return (
    <label className="switch_positions">
      <input type="checkbox"
             defaultChecked={completedTask}
             onChange={() => {
               completedTaskFunc(id)
             }}
      />
      <span className="slider_positions round"/>
    </label>
  );
};

export default SwitchToggle;