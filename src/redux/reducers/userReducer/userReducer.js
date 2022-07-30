import * as types from '../actionTypes';
import {
    loadingError,
    loadingStart,
    loadingSuccess, logoutError,
    logoutStart, logoutSuccess,
    registerError,
    registerStart,
    registerSuccess
} from "../actions";

import {auth} from "../../../firebase";

const initialState = {
    loading: false,
    error: null,
    currenUser: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
            return {
                ...state,
                loading: true
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                currenUser: action.payload,
                loading: false
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                currenUser: null
            }

        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export const registerInitiate = (email, password, displayName) => {
    return (dispatch) => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user))
            })
            .catch((err) => dispatch(registerError(err)))

    }
}

export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(loadingStart())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(loadingSuccess(user))
            })
            .catch((err) => dispatch(loadingError(err)))

    }
}

export const logout_initiate = () => {
    return (dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then((resp) => dispatch(logoutSuccess()))
            .catch((e) => dispatch(logoutError(e)))
    }
}