import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "./chatsReducer/chatsReducer";
import {messagesReducer} from "./messagesReducer/messagesReduser";
import {persistReducer, persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage'
import {createLogger} from "redux-logger/src";

// const logger = (store) => (next) => (action) => {
//     console.log('dispatching', action);
//     console.log('before', store.getState());
//
//     let result = next(action);
//     console.log('after', store.getState());
//
//     return result
// }

const time = store => next => action => {
    const delay = action?.meta?.delay;

    if (!delay)
    {
        return next(action)
    }

    const timeOut = setTimeout(() => next(action), delay);

    return () => {
        console.log('deleting...')
        clearTimeout(timeOut)
    }
}

const persistConfig = {
    key: 'root',
    storage
}

const logger = createLogger({
    collapsed: true,
    diff: true
})

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(logger, time));
export const persist = persistStore(store);