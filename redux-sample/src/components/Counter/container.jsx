import { connect } from "react-redux"
import { increment, decrement } from "../../redux/count/actions";

import Counter from "./presentation";

// store からどの state を引っ張ってくるか
const mapStateProps = ({ count }) => ({ count })

// どんな dispatcher を props に渡すか。渡した先で props.increment() で呼べる
const mapDispatchProps = dispatch => ({
  increment: count => {
    dispatch(increment(count))
  },
  decrement: count => {
    dispatch(decrement(count))
  }
})

export default connect(
  mapStateProps,
  mapDispatchProps
)(Counter);
