import {ERROR, GET_TODOS, LOADING} from "../actionsTypes";
import {error_todos, get_todos, loading_todos} from "../actions";

const initialState = {
    todos: [],
    loading: false,
    error: null
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export const loadTodos = () => {
    return async dispatch => {
        dispatch(loading_todos())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const json = await response.json()
            dispatch(get_todos(json))

        } catch (e) {
            dispatch(error_todos(e))
        }
    }
}