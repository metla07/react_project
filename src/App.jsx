import React, {useState, useEffect, useRef} from "react";
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from "./componentList/List";
import Message from "./Message";


function App() {

    const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('Андрей');

    useEffect(() => {
        setTimeout(() => (
            robotAnswer(messageList)
        ), 500)
    }, [messageList]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessageList(prevState => [...prevState, {
            id: giveLastId(prevState),
            text,
            author
        }])
    }

    function giveLastId(arr) {
        return arr.length ? arr[arr.length - 1].id + 1 : 0;
    }

    function robotAnswer() {
        const lastAuthor = messageList[messageList.length - 1];
        if (lastAuthor && lastAuthor.author) {
            setMessageList(prevState => [...prevState, {
                id: giveLastId(prevState),
                text: `Сообщение автора ${lastAuthor.author} отправлено`
            }])
        }
    }

    const chats = [
        {
            name: 'Game',
            id: 1
        },
        {
            name: 'Study',
            id: 2
        },
        {
            name: 'Sports',
            id: 3
        },
    ]


    return (
        <div className="App">
            <div className={'container'}>
                {chats.map((item) => {
                    return (
                        <List name={item.name} key={item.id}/>
                    )
                })}
            </div>
            <div className="App-header">
                <Box
                    component="form"
                    action="#"
                    onSubmit={handleSubmit}
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                    }}
                    Validate
                    autoComplete="off">
                    <div>
                        <TextField
                            required
                            type="text"
                            value={author}
                            onChange={(event) => setAuthor(event.target.value)}
                            id="outlined-required"
                            label="Name"
                            defaultValue="Andrey"
                        />
                        <TextField
                            required
                            type="text"
                            autoFocus={{text}}
                            id="outlined-required"
                            label="Message"
                            defaultValue="Hello World"
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                        />
                    </div>
                    <Button type="submit" variant="contained">Отправить сообщение</Button>
                </Box>
            </div>
            <div className={'message-box'}>
                {messageList.map((message) => {
                    return (

                        <Message author={message.author} text={message.text} key={message.id}/>

                        // ещё один вариант
                        // <div key={message.id}>
                        //     {message.author && <p>Автор : {message.author}</p>}
                        //     <p>{message.author && <span>текст :</span>} {message.text}</p>
                        // </div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
