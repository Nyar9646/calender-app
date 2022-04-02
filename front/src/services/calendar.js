import dayjs from "dayjs";
import 'dayjs/locale/ja';

dayjs.locale('ja')

export const createCalendar = () => {
  const firstDay = dayjs().startOf('month')
  const firstDayIndex = firstDay.day()

  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex
      return firstDay.add(diffFromFirstDay, 'day')
    })
}
