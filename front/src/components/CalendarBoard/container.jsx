/** container : redux からの store と redux に dispatch する関数を props として提供するための component */

import { connect } from "react-redux"
import { createCalendar } from "../../services/calendar"
import CalendarBoard from "./presentation"
import { addScheduleOpenDialog } from "../../redux/addSchedule/actions"

const mapStateToProps = state => ({ calendar: state.calendar })

const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog: () => {
    dispatch(addScheduleOpenDialog())
  }
})

const margeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  month: stateProps.calendar,
  calendar: createCalendar(stateProps.calendar)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  margeProps
)(CalendarBoard)
