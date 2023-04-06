//import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Navbar from "./Navbar"
import "./styles.css"
import {Home} from"./pages/Home"
import {Registration} from"./pages/Registration"
import {Login} from"./pages/Login"
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
      </Routes>
    </div>
  </>
  )
}

export default App