import React from 'react';
import {getChatsSelector} from "../redux/reducers/chatsReducer/chatsSelector";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const Chats = () => {
    const chats = useSelector(getChatsSelector);
    return (
        <div className={'chats-container'}>
            <h1>Chats</h1>
            {chats.map((chat) => (
                <Link key={chat.id} to={`/messages/${chat.id}`} className={'Link'}>
                    {chat.name}
                </Link>
            ))}
        </div>
    );
};

export default Chats;