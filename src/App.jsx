
import React, {useState,useEffect,useRef} from "react";
import './App.css';

function App() {
    const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        setTimeout(() => (
            robotAnswer(messageList)
        ), 2000)
    }, [messageList])

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
                id:giveLastId(prevState),
                text: `Сообщение автора ${lastAuthor.author} отправлено`
            }])
        }

    }



  return (
    <div className="App">
      <header className="App-header">
          <form action="#" onSubmit={handleSubmit}>
              <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
              <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)}/>
              <button type="submit">Отправить сообщение</button>
          </form>

          {messageList.map((message) => {
              return (
                  <div key={message.id}>
                      {message.author && <p>Автор : {message.author}</p>}
                      <p>{message.author && <span>текст :</span>} {message.text}</p>
                  </div>
              )
          })}
      </header>
    </div>
  );
}

export default App;
