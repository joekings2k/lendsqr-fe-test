import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import styles from "@/styles/custom-datepicker.module.scss"; // adjust path as needed
import { CalendarIcon } from "@/assets/svgs";
// or use an <img>

export default function CustomDatePicker() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className={styles.datePickerWrapper}>
      <label htmlFor="date">Date</label>
      <div className={styles.inputContainer}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Date"
          className="custom-input" // scoped by SCSS
          id="date"
        />
        <CalendarIcon className={styles.calendarIcon} />
      </div>
    </div>
  );
}
