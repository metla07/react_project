import React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Chats from "../pages/Chats";
import Messages from "../pages/Messages";
import NotFound from "../pages/NotFound";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Chats/>}/>
            <Route path={'/messages/:id'} element={<Messages/>}/>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
