import { SCHEDULES_ADD_ITEM } from "./actions"

const init = {
  items: [],
  isLoading: false
}

/** payload に新規の予定が入る */
const schedulesReducer = (state = init, action) => {
  const { type, payload } = action

  switch (type) {
    case SCHEDULES_ADD_ITEM:
      /** id は表示での map の暫定的な key 対応 */
      return {
        ...state,
        items: [...state.items, {...payload, id: state.items.length + 1}]
      }
    default:
      return state
  }
}

export default schedulesReducer