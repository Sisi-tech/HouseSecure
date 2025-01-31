import React, { useState, useEffect } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/mainPages/home';
import Login from './components/mainPages/login';
import SignUp from './components/mainPages/signUp';
import ResetPassword from './components/mainPages/resetPassword';
import Menu from './components/Pages/menu';
import Profile from './components/Pages/profile';
import CreateQuote from './components/Pages/createQuote';
import ViewCoverages from './components/Pages/viewCoverages';
import ChangeCoverages from "./components/Pages/changeCoverages";
import PolicyDocuments from "./components/Pages/policyDocuments";
import BillingInfo from "./components/Pages/billingInfo";
import About from './components/mainPages/about';
import Insurance from './components/mainPages/insurance';
import Claims from './components/mainPages/claims';
import Careers from './components/mainPages/careers';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signUp' element={<SignUp />}/>
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-quote" element={<CreateQuote />} />
      <Route path="/view-coverage" element={<ViewCoverages />} />
      <Route path="/change-coverages" element={<ChangeCoverages />} />
      <Route path="/policy-documents" element={<PolicyDocuments />} />
      <Route path="/billing-info" element={<BillingInfo />} />
      <Route path="/about" element={<About />} />
      <Route path="/insurance" element={<Insurance />} />
      <Route path="/claims" element={<Claims />} />
      <Route path="/careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
