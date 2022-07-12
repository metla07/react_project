import {DELETE_MESSAGE, ADD_MESSAGE} from "../actionTypes";

const initialState = {
    messages: [
        {
            id: 1,
            title: 'Ты сделал домашку?',
            chatId: 1
        },
        {
            id: 2,
            title: 'Я только проснулся...',
            chatId: 2
        },
        {
            id: 3,
            title: '6 урок, которая?',
            chatId: 3
        },
        {
            id: 4,
            title: 'Пока нет, но я сделаю точно!',
            chatId: 4
        }
    ]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter((item) => item.id !== action.payload)
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }


        default:
            return state
    }
}