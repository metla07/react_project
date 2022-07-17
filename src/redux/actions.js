import {ERROR, GET_TODOS, LOADING} from "./actionsTypes";

export const get_todos = (data) => ({
    type: GET_TODOS,
        payload: data
})

export const loading_todos = () => ({
    type: LOADING,
})

export const error_todos = (err) => ({
    type: ERROR,
        payload: err.toString()
})