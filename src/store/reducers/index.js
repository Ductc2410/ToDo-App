import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const createReducer = combineReducers({
    tasks: taskReducer,
});

export default createReducer;