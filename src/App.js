import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();


  return (
    <div className="App">
        <div className={'btn-container'}>
            <button onClick={() => dispatch({type:'plus'})}>+</button>
            <button onClick={() => dispatch({type:'minus'})}> - </button>
            <button className={'btn-red'} onClick={() => dispatch({type:'reset'})}>reset</button>
        </div>
        <div>
           Счётчик : <h1>{ count }</h1>
        </div>
    </div>
  );
}

export default App;
