//import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar"
import "./styles.css"
import {Home} from"./pages/Home"
import {Registration} from"./pages/Registration"
import {Login} from"./pages/Login"
import {MyAccount} from "./pages/MyAccount"
import {RequestRide} from "./pages/RequestRide"
import {RideHistory} from "./pages/RideHistory"
import ForgotPassword from "./pages/ForgotPassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/Registration" element={<Registration />} />
        <Route path= "/Login" element={<Login />} />
        <Route path= "/Myaccount" element={<MyAccount />} />
        <Route path= "/RequestRide" element={<RequestRide />} />
        <Route path= "/RideHistory" element={<RideHistory />} />
        <Route path= "/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  </>
  )
}

export default App