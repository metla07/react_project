import './App.css';
import Layout from "./layout/Layout";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";
import NotFoundPage from "./pages/NotFoundPage";
import React from "react";


function App() {
  return (
    <div className="App">
        <Routes>
           <Route path={'/'} element={<Layout/>}>
               <Route index element={<HomePage/>}/>
               <Route path={'/profile'} element={<ProfilePage/>}/>
               <Route path={'/chats'} element={<ChatPage/>}/>
               <Route path={'*'} element={<NotFoundPage/>}/>
           </Route>
        </Routes>
    </div>
  );
}

export default App;
