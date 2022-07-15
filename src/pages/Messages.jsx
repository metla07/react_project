import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMessagesSelector} from "../redux/reducers/messagesReducer/messagesSelector";
import {Link, useParams} from "react-router-dom";
import {ADD_MESSAGE, DELETE_MESSAGE} from "../redux/reducers/actionTypes";

const Messages = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const chatsMessages = useSelector(getMessagesSelector);
    const dispatch = useDispatch();

    const messages = chatsMessages.filter((message) => {
        if (!id) return null;

        return message.chatId === Number(id)
    })

    const deleteMessage = (id) => {
        dispatch({
            type: DELETE_MESSAGE,
            payload: id,
            meta: {
                delay: 1500
            }
        })
    }

    const addMessage = () => {
        const obj = {
            id: (Math.random() * 100),
            title: title,
            chatId: Number(id)
        }
        dispatch({
            type: ADD_MESSAGE,
            payload: obj
        })
    }
    return (
        <div className={'messages-show'}>
            <Link className={'Link-to-home'} to={'/'}>Home</Link>
            <h3>Messages:</h3>
            <div className={'add-message-container'}>
                <input className={'input'}
                       autoFocus
                       type="text"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}/>
                <button className={'btn'}
                        onClick={addMessage}>ADD
                </button>
            </div>
            {messages.map((message) => (
                <div className={'message-box'} key={message.id}>
                    <p>{message.title}</p>
                    <button className={'btn-delete'} onClick={() => deleteMessage(message.id)}>X</button>
                </div>
            ))}
        </div>
    );
};

export default Messages;