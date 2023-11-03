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
import {AvailableRides} from "./pages/AvailableRides";
import {MyRides} from "./pages/MyRides";
import { Route, Routes} from "react-router-dom"


function App() {
  return (
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/registration" element={<Registration />} />
        <Route path= "/login" element={<Login />} />
        <Route path= "/MyAccount" element={<MyAccount />} />
        <Route path= "/RequestRide" element={<RequestRide />} />
        <Route path= "/RideHistory" element={<RideHistory />} />
        <Route path= "/AvailableRides" element={<AvailableRides />} /> {/* Add route for AvailableRides */}
        <Route path= "/MyRides" element={<MyRides />} /> {/* Add route for MyRides */}
      </Routes>
    </div>
  </>
  )
}

export default App
