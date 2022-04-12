import { connect } from 'react-redux'
import AddScheduleDialog from "./presentation";
import { addScheduleCloseDialog, addScheduleSetValue } from "../../redux/addSchedule/actions";
import { schedulesAddItem } from '../../redux/schedules/actions'

const mapStateToProps = state => ({ schedule: state.addSchedule })

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog())
  },
  setSchedule: value => {
    dispatch(addScheduleSetValue(value))
  },
  saveSchedule: schedule => {
    dispatch(schedulesAddItem(schedule))

    // 入力のリセットが行われる。二重登録が防止される
    dispatch(addScheduleCloseDialog())
  }
})

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  saveSchedule: () => {
    const {
      // form ではここでは何を表しているか分かりにくいので、schedule という変数名で受け取っている
      schedule: { form: schedule }
    } = stateProps

    // saveSchedules は mapDispatchToProps と mergeProps 双方に存在するが、
    // mapDispatchToProps を上書きしてそちらからアクセスする
    dispatchProps.saveSchedule(schedule)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog)
