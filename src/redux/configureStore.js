import {applyMiddleware, combineReducers, createStore} from "redux";
import {todosReducer} from "./todosReducer/todosReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    todos: todosReducer
})
export const store = createStore(reducer, applyMiddleware(thunk))