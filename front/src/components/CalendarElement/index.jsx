import React from "react";
import { Typography } from "@material-ui/core";
import * as styles from "./style.css"
import Schedule from "../Schedule";
import {
  getToday,
  isFirstDay,
  isSameDay,
  isSameMonth,
  getMonth
} from "../../services/calendar";

const CalendarElement = ({ day, month, schedules, ...props }) => {
  const format = isFirstDay(day) ? "M月D日" : "D"
  const isToday = isSameDay(day, getToday())
  const isCurrentMonth = isSameMonth(day, getMonth(month))

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={isCurrentMonth ? "textPrimary" : "textSecondary"}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : null}>
          {day.format(format)}
        </span>
      </Typography>
      <div className={styles.schedules}>
        {schedules.map(e => (
          <Schedule key={e.id} schedule={e} {...props} />
        ))}
      </div>
    </div>
  )
}

export default CalendarElement