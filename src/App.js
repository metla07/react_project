import './App.css';
import Message from "./Message";

function App() {
    const nameMessage = "Привет Реакт"
  return (
    <div className="App">
      <header className="App-header">
        <Message name = {nameMessage}/>
      </header>
    </div>
  );
}

export default App;
