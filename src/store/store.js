import { applyMiddleware, createStore, compose } from "redux";
import createReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	createReducer,
	composeEnhancers()
)

export default store