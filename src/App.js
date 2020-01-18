import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

export default function App() {
  let [screen, setScreen] = useState("Home");
  return (
    <div style={{width: '100%', height: '100%', backgroundColor: "#f5f7fb"}}>
      <Header/>
      <Home/>
    </div>
  );
}