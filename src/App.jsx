import React, { useState, useEffect } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signUp';
import ResetPassword from './components/resetPassword';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signUp' element={<SignUp />}/>
      <Route path="/resetPassword" element={<ResetPassword />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
