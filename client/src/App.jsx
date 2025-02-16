import React, { useState, useEffect } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home';
import Login from './components/pages/login';
import SignUp from './components/pages/signUp';
import ResetPassword from './components/pages/resetPassword';
import Menu from './components/shared/menu';
import Profile from './components/shared/profile';
import About from './components/pages/about';
import Insurance from './components/pages/insurance';
import Claims from './components/pages/claims';
import Careers from './components/pages/careers';
import CreateQuote from "./components/policy/createQuote";
import ViewCoverages from "./components/policy/viewCoverages";
import ChangeCoverages from "./components/policy/changeCoverages";
import PolicyDocuments from "./components/policy/policyDocuments";
import BillingInfo from "./components/policy/billingInfo";
import ApplicantInfo from "./components/forms/applicantInfo";
import Location from "./components/forms/location";
import History from "./components/forms/history";
import Coverage from "./components/forms/coverage";
import Interest from "./components/forms/interest";
import Question from "./components/forms/question";
import Rate from "./components/forms/rate";
import Welcome from './components/pages/welcome';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signUp' element={<SignUp />}/>
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/create-quote" element={<CreateQuote />} />
        <Route path="/view-coverages" element={<ViewCoverages />} />
        <Route path="/change-coverages" element={<ChangeCoverages />} />
        <Route path="/policy-documents" element={<PolicyDocuments />} />
        <Route path="/billing-info" element={<BillingInfo />} />
        <Route path="/quote/applicant-info" element={<ApplicantInfo />} />
        <Route path="/quote/location" element={<Location />} />
        <Route path="/quote/history" element={<History />} />
        <Route path="/quote/coverage" element={<Coverage />} />
        <Route path="/quote/interest" element={<Interest />} />
        <Route path="/quote/question" element={<Question />} />
        <Route path="/quote/rate" element={<Rate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
