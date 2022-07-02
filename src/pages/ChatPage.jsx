import React, {useState} from 'react';
import '../layout/Layout.css'


const ChatPage = () => {
    const [chats, setChats] = useState([
        {id:1,
        name: 'Андрей'
        },
        {id:2,
        name: 'Иван'
        },
        {id:3,
        name: 'Марина'
        }
    ])

    const [name, setName] = useState('');
    
    const deleteHandler = (id) => {
        const filteredItems = chats.filter((chat) => chat.id !== id);
        setChats(filteredItems)
    };

    const addChatHandler = () => {
        let random = Math.random();
        const obj = {
            id: random,
            name: name
        }
         // setChats(prevState => [...prevState, obj]);
         setChats(prevState => chats.push(obj));
    }
    
    return (
        <div className={'box-chats'}>
            <div>
                <input value={name} onChange={(event) => setName(event.target.value)}/>
                <button className={'btn-add-name'} onClick={addChatHandler}>Add chat</button>
            </div>


            <div className={'chats-flex'}>
            {
                chats.map((chat) => (
                    <div key={chat.id} className={'container-chats'}>
                        <h3>
                            {chat.name}
                        </h3>
                        <button className={'btn'} onClick={() => deleteHandler(chat.id)}>X</button>

                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default ChatPage;