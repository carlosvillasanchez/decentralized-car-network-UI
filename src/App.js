import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

///// Own code imports
import Header from './components/Header';
import Home from './components/Home';
import Colors from './constants/colors';
import Map from './models/map';
import SimulationConstants from './constants/simulationConstants';

function createEmptyMap(){
  var xRange = SimulationConstants.XCells*SimulationConstants.XAreas;
  var yRange = SimulationConstants.YCells*SimulationConstants.YAreas;
  var to_return = [];
  for(var i=0; i<yRange; i++){
    to_return.push(new Array(xRange))
  }
  console.log(to_return)
  return to_return;
}

let initialMap = new Map(
  createEmptyMap(),
  new Array(),
  new Array(),
  new Array(),
  new Array()
);

export default function App() {
  // STATE
  let [screen, setScreen] = useState("Home");
  let [started, setStarted] = useState(false);
  let [map, setMap] = useState(initialMap);

  //FUNCTIONS
  function startStopSimulation(starting){
    console.log("ICI2")
    setStarted(starting);
  }

  console.log(map)
  return (
    <div style={{width: '100%', height: '100%', backgroundColor: Colors.background}}>
      <Header/>
      <Home started={started} startStopSimulation={startStopSimulation}/>
    </div>
  );
}