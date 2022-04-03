/** container : redux からの store と redux に dispatch する関数を props として提供するための component */

import { connect } from "react-redux"
import CalendarBoard from "./presentation"

const mapStateToProps = state => ({ calendar: state.calendar })

export default connect(mapStateToProps)(CalendarBoard)
