import React from "react";
import * as styles from "./style.css"
import { Typography } from "@material-ui/core";
import { getToday, isFirstDay, isSameDay, isSameMonth } from "../../services/calendar";

const CalendarElement = ({ day }) => {
  const today = getToday()
  const format = isFirstDay(day) ? "M月D日" : "D"
  const isToday = isSameDay(day, today)
  const isCurrentMonth = isSameMonth(day, today)

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
    </div>
  )
}

export default CalendarElement