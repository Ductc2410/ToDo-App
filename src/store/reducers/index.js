import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import taskReducer_Immer from "./taskReducer-Immer";

const createReducer = combineReducers({
    tasks: taskReducer,
});

export default createReducer;