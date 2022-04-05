import dayjs from "dayjs";
import 'dayjs/locale/ja';

dayjs.locale('ja')

export const createCalendar = month => {
  const firstDay = getMonth(month)
  const firstDayIndex = firstDay.day()

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex
      return firstDay.add(diffFromFirstDay, 'day')
    })
}

export const getMonth = ({year, month}) => {
  // dayjs は不完全な日付形式でも他を0で埋めて取得可能
  return dayjs(`${year}-${month}`)
}

const getMonthStateCreator = diff => month => {
  const day = getMonth(month).add(diff, "month")
  return formatMonth(day)
}

export const getNextMonth = getMonthStateCreator(1)
export const getPreviousMonth = getMonthStateCreator(-1)

export const formatMonth = day => ({
  year: day.year(),
  month: day.month() + 1
})

export const getToday = () => dayjs()

export const isFirstDay = day => day.date() === 1

export const isSameDay = (d1, d2) => {
  return d1.date() === d2.date()
}

export const isSameMonth = (m1, m2) => {
  return m1.month() === m2.month()
}
