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
  createEmptyMap(),
  new Array(),
  new Array(),
  new Array(),
  new Array()
);

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function App() {
  // STATE
  let [screen, setScreen] = useState("Home");
  let [started, setStarted] = useState(false);
  let [map, setMap] = useState(initialMap);
  let [mapClickable, setMapClickable] = useState(true);
  let [objectToAdd, setobjectToAdd] = useState("");
  //FUNCTIONS
  function startStopSimulation(starting){
    setStarted(starting);
  }
  
  function mapClickableOnClick(row, col){
    console.log(row, col);
    var mapCopy = map;
    var items = ["b", "c", "cc", "p"]
    var item = items[Math.floor(Math.random()*items.length)];
    mapCopy.labels[row][col] = item;
    setMap({...mapCopy});
  }

  function addObject(type, random){
    var xRange = SimulationConstants.XCells*SimulationConstants.XAreas;
    var yRange = SimulationConstants.YCells*SimulationConstants.YAreas;
    if(random){
      var x = getRandomArbitrary(0, xRange)
      var y = getRandomArbitrary(0, yRange)
      while(true){
        if(map.labels[x][y] === undefined){
          break
        }
        x = getRandomArbitrary(0, xRange)
        y = getRandomArbitrary(0, yRange)
      }
      var mapCopy = map;
      mapCopy.labels[x][y] = type;
      setMap({...mapCopy});
    }
  }
  return (
    <div style={{width: '100%', height: '100%', backgroundColor: Colors.background}}>
      <Header/>
      <Home 
        started={started} 
        startStopSimulation={startStopSimulation} 
        mapClickable={mapClickable}
        mapClickableOnClick={mapClickableOnClick}
        map={map}
        addObject={addObject}/>
    </div>
  );
}