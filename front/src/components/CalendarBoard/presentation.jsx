/** presentarion : 表示にのみ責務をもつ component. props から渡った値の表示を行う */

import React from "react";
import { ImageList, Typography } from '@material-ui/core';
import CalendarElement from '../CalendarElement'
import * as styles from "./style.css"

const days = ['日', '月', '火', '水', '木', '金', '土']

const CalendarBoard = ({
  calendar,
  month,
  openAddScheduleDialog,
  openCurrentScheduleDialog
}) => {
  return (
    <div className="conteiner">
      <ImageList className={styles.grid} gap={0} cols={7} rowHeight="auto">
        {days.map(d => (
          <li key={d}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >{d}</Typography>
          </li>
        ))}
        {calendar.map(c => (
          <li key={c.date.toISOString()} onClick={() => openAddScheduleDialog(c.date)}>
            <CalendarElement
              day={c.date}
              month={month}
              schedules={c.schedules}
              onClickSchedule={openCurrentScheduleDialog}
            />
          </li>
        ))}
      </ImageList>
    </div>
  )
}

export default CalendarBoard
