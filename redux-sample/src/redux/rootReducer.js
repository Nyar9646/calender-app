import { combineReducers } from "redux"
import { count } from "./count/reducer";

// React にstateを渡すため、全てのreducerを渡す
const rootReducer = combineReducers({ count })

export default rootReducer;