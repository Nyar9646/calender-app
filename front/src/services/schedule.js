/**
 * 開発経過
 *  変数 calendar は、dayjs の配列にしていた。これを
 *  'date' という dayjs のメンバと、'schedules' という schedule の配列メンバにデータ構造を変える
 */

import { isSameDay } from './calendar'

export const setSchedules = (calendar, schedules) =>
  calendar.map(c => ({
    date: c,
    schedules: schedules.filter(e => isSameDay(e.date, c))
  }))
