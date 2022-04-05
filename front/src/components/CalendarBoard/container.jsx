/** container : redux からの store と redux に dispatch する関数を props として提供するための component */

import { connect } from "react-redux"
import { createCalendar } from "../../services/calendar"
import CalendarBoard from "./presentation"

const mapStateToProps = state => ({ calendar: state.calendar })

const margeProps = (stateProps) => ({
  month: stateProps.calendar,
  calendar: createCalendar(stateProps.calendar)
})

export default connect(mapStateToProps, null, margeProps)(CalendarBoard)
