import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getErrorSelector, getLoadingSelector, getTodosSelector} from "../redux/todosReducer/todosSelector";
import {loadTodos} from "../redux/todosReducer/todosReducer";

const Todos = () => {
    const todos = useSelector(getTodosSelector);
    const loading = useSelector(getLoadingSelector);
    const error = useSelector(getErrorSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos())
    }, [])

    const reloadTodos = () => {
        dispatch(loadTodos())
    }

    if (loading) {
        return (
            <div>
                идёт загрузка...
            </div>
        )
    }
    if (error) {
        return (
            <div>
                произошла ошибка
                <button onClick={reloadTodos}>
                    обновить
                </button>
            </div>
        )
    }
    return (
        <div >
            {todos.map((todo) => (
                <div key={todo.id} className={'container-todos'}>
                    <h5>{todo.title}</h5>
                </div>
            ))}
        </div>
    );
};

export default Todos;