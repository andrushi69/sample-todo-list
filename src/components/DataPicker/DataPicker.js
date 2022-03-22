import React, {forwardRef, useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./DataPicker.module.scss";

const DataPicker = ({onToggleDeadLineInfo, item, addDeadLine}) => {
  const [startDate, setStartDate] = useState(null);
  const [ableDatePicker, setAbleDatePicker] = useState(true)

  useEffect(() => {
    if (startDate !== null) {
      onToggleDeadLineInfo(item.id)
    }

  }, [startDate])

  const ExampleCustomInput = forwardRef(({value, onClick}, ref) => (
    <button className={classes.custom_date_picker} onClick={onClick} ref={ref}>
      {ableDatePicker ? "Disable Now :(" : "Set deadline..."}
    </button>
  ));

  return (
    <div className={classes.date_picker_section}>
      {!ableDatePicker ?
        <DatePicker
        selected={startDate}
        minDate={new Date()}
        showDisabledMonthNavigation
        customInput={<ExampleCustomInput/>}
        onChange={(date) => {
          setStartDate(date)
          addDeadLine(item.id, date.getDate(), date.getMonth() + 1, date.getFullYear())
        }
        }
        disabled={ableDatePicker}
        dateFormat="dd/MM/yyyy"
      />
         : ""}
      {ableDatePicker ? <div className={classes.date_picker_buttons}>
        <p>Add deadline?</p>
        <button onClick={() => {
          setAbleDatePicker(false)
        }}>Yes
        </button>
        <button onClick={() => {
          onToggleDeadLineInfo(item.id)
        }}>No
        </button>
      </div> : ""}

    </div>

  );
};

export default DataPicker;