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

import { Route, Routes} from "react-router-dom"

function App() {
  return (
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/Registration" element={<Registration />} />
        <Route path= "/login" element={<Login />} />
        <Route path= "/MyAccount" element={<MyAccount />} />
        <Route path= "/RequestRide" element={<RequestRide />} />
        <Route path= "/RideHistory" element={<RideHistory />} />

      </Routes>
    </div>
  </>
  )
}

export default App