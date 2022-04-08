import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;

/**
 * +-1 加減算
 * @param {} state
 * @param {action を分割代入} param1
 * @returns
 *
 * ＊Reduxルール : (initStateを)直接変更せずに新しいstateを返す
 */
export const count = (state = initState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
}
