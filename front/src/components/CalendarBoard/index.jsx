import React from "react";
import { ImageList } from '@material-ui/core';
import CalendarElement from '../CalendarElement'
import { createCalendar } from '../../services/calendar'
import * as styles from "./style.css"

const calendar = createCalendar()

const CalendarBoard = () => {
  return (
    <div className="conteiner">
      <ImageList className={styles.grid} gap={0} cols={7} rowHeight="auto">
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalendarElement children={c.format('D')} />
          </li>
        ))}
      </ImageList>
    </div>
  )
}

export default CalendarBoard
