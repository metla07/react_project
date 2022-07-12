import {combineReducers, createStore} from "redux";
import {chatsReducer} from "./chatsReducer/chatsReducer";
import {messagesReducer} from "./messagesReducer/messagesReduser";

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer
})

export const store = createStore(rootReducer);