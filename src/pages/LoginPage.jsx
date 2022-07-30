import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'
import {loginInitiate} from "../redux/reducers/userReducer/userReducer";
import {userSelector} from "../redux/reducers/userReducer/userSelector";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password))
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit'>SIGN IN</button>
            </form>
        </div>
    );
};

export default LoginPage;