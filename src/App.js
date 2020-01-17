import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div style={{width: '100%', height: '100%', backgroundColor: "#f5f7fb"}}>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
