import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import sprite from "../../../assets/svg/sprite.svg";
import styles from "./diaryDateСalendar.module.scss";

const DiaryDateCalendar = ({ fetchDayInfo }) => {
  const [startDate, setStartDate] = useState(new Date());

  const prepareDate = (dateOld) => {
    return { date: dateOld.toISOString().slice(0, 10) };
  };

  useEffect(() => {
    fetchDayInfo(prepareDate(startDate));
  }, [fetchDayInfo, startDate]);

  return (
    <div className="wrapper_container">
      <div className={styles.wrapper}>
        <DatePicker
          className={styles.datePicker}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd.MM.yyyy"
        />
        <svg className={styles.icon}>
          <use href={sprite + "#icon-calendar"}></use>
        </svg>
      </div>
    </div>
  );
};

export default DiaryDateCalendar;
