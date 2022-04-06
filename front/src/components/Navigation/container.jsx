import Navigation from "./presentation";
import { connect } from "react-redux"
import { getNextMonth, getPreviousMonth, getMonth, formatMonth } from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";

const mapStateToProps = state => ({ calendar: state.calendar })

const mapDispatchToProps = dispatch => ({
  setMonth: month => {
    dispatch(calendarSetMonth(month))
  }
})

const mergeProps = (stateProps, dispatchProps) => ({
  // month という state に redux の state から day.js に変換して props として提供
  month: getMonth(stateProps.calendar),
  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar)
    dispatchProps.setMonth(nextMonth)
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calendar)
    dispatchProps.setMonth(previousMonth)
  },
  // 変更があった時は days.js インスタンスが帰ってくるので、redux の state に変換してから dispatch する
  setMonth: dayobj => {
    const month = formatMonth(dayobj)
    dispatchProps.setMonth(month)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation)