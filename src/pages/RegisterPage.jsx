import React, {useEffect, useState} from 'react';
import {userSelector} from "../redux/reducers/userReducer/userSelector";
import {useDispatch} from "react-redux";
import {registerInitiate} from "../redux/reducers/userReducer/userReducer";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const user = userSelector(userSelector);

    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate('/')

        }
    }, [navigate, user])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName))


    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input value={displayName} type="text" onChange={(e) => setDisplayName(e.target.value)}/>
                <input value={email} type="text" onChange={(e) => setEmail(e.target.value)}/>
                <input value={password} type="text" onChange={(e) => setPassword(e.target.value)}/>
                <input value={confirmPassword} type="text" onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button type="submit">SING IN</button>
            </form>
        </div>
    );
};

export default RegisterPage;