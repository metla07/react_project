import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

function App() {
  return (
  <Routes>
      <Route path={'/'} element={<HomePage/>}/>
      <Route path={'/register'} element={<RegisterPage/>}/>
      <Route path={'/login'} element={<LoginPage/>}/>
      <Route path={'*'} element={<NotFoundPage/>}/>
  </Routes>
  );
}

export default App;
