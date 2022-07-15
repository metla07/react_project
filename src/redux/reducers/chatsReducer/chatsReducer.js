import {GET_MESSAGES} from "../actionTypes";

const initialState = {
    chats: [
        {
            id: 1,
            name: 'Andrey'
        },
        {
            id: 2,
            name: 'Petr'
        },
        {
            id: 3,
            name: 'Ivan'
        },
        {
            id: 4,
            name: 'Artur'
        },
    ]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                chats: state.chats
            }


        default:
            return state
    }
}