import React from 'react';
import {useDispatch} from "react-redux";
import {logout_initiate} from "../redux/reducers/userReducer/userReducer";

const HomePage = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logout_initiate())

    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={logout}>ВЫХОД</button>
        </div>
    );
};

export default HomePage;