import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

///// Own code imports
import Header from './components/Header';
import GeneralScreen from './components/GeneralScreen';
import IndividualScreen from './components/IndividualScreen'
import Colors from './constants/colors';
import SimulationConstants from './constants/simulationConstants';

import Map from './models/map';
import Building from './models/building';
import Car from './models/car';
import CarCrash from './models/carCrash';
import ParkingSpot from './models/parkingSpot';

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
  let [screen, setScreen] = useState("General");
  let [started, setStarted] = useState(false);
  let [map, setMap] = useState(initialMap);
  let [objectToAdd, setobjectToAdd] = useState("");
  let [xyStored, setxyStored] = useState([])
  let [selectedCar, setSelectedCar] = useState()
  let [idCars, setIdCars] = useState(0)
  let [idBuildings, setIdBuildings] = useState(0)
  let [idCarCrashes, setIdCarCrashes] = useState(0)
  let [idParkingSpots, setIdParkingSpots] = useState(0)
  //FUNCTIONS
  function changeScreen(newScreen){
    setScreen(newScreen);
  }

  function startStopSimulation(starting){
    if(starting){
      if(map.cars.length === 0){
        console.log("FIRST ADD CARS")
        return
      }else{
        var indexOfCar = getRandomArbitrary(0, map.cars.length)
        setSelectedCar(map.cars[indexOfCar])
      }
    }
    setStarted(starting);
  }

  function addNewBuilding(x, y){
    var mapCopy = map;
    var id = idBuildings;
    setIdBuildings(id => id + 1)
    var newBuilding = new Building(id, x, y);
    mapCopy.buildings.push(newBuilding);
    mapCopy.labels[x][y] = "b";
    setMap({...mapCopy});
    setobjectToAdd("");
  }

  function addNewCarCrash(x, y){
    var mapCopy = map;
    var id = idCarCrashes;
    setIdCarCrashes(id => id + 1)
    var newCarcrash = new CarCrash(id, x, y, 0, 0);
    mapCopy.carCrashes.push(newCarcrash);
    mapCopy.labels[x][y] = "cc";
    setMap({...mapCopy});
    setobjectToAdd("");
  }

  function addNewParking(x, y){
    var mapCopy = map;
    var id = idParkingSpots;
    setIdParkingSpots(id => id + 1)
    var newParkingSpot = new ParkingSpot(id, x, y, 0, 0);
    mapCopy.parkingSpots.push(newParkingSpot);
    mapCopy.labels[x][y] = "p";
    setMap({...mapCopy});
    setobjectToAdd("");
  }
  
  function addNewCar(x, y){
    console.log("IZIIII")
    var mapCopy = map;
    if(xyStored.length === 0){
      console.log("IZIIII 1")
      setxyStored([x, y]);
      mapCopy.labels[x][y] = objectToAdd;
    }else{
      console.log("IZIIII 2")
      setobjectToAdd("");
      setxyStored([]);
      var id = idCars;
      setIdCars(id => id + 1)
      var port = 5005 + id
      var newCar = new Car(id, "127.0.0.1", port, xyStored[0], xyStored[1], x, y, new Array(), new Array(), new Array());
      map.objects[xyStored[0]][xyStored[1]] = id
      mapCopy.cars.push(newCar);
    }
    setMap({...mapCopy});
    
  }

  function mapClickableOnClick(x, y){
    console.log(x, y);
    switch(objectToAdd){
      case "c":
        addNewCar(x,y)
        break;
      case "b":
        addNewBuilding(x,y)
        break;
      case "cc":
        addNewCarCrash(x,y)
        break;
      case "p":
        addNewParking(x,y)
        break;
      default:
        if(started){
          console.log("Started", map.objects[x][y], map.objects)
          if(map.objects[x][y] !== undefined){
            let id = map.objects[x][y]
            for(var i=0; i<map.cars.length; i++){
              console.log(i, map.cars[i].id)
              if(map.cars[i].id === id){
                setSelectedCar(map.cars[i]);
                setScreen("Individual");
                break;
              }
            }
          }
        }
    }
    
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
      switch(type){
        case "c":
          var mapCopy = map;
          mapCopy.labels[x][y] = "c";
          var x2 = getRandomArbitrary(0, xRange)
          var y2 = getRandomArbitrary(0, yRange)
          var id = idCars;
          setIdCars(id => id + 1)
          var port = 5005 + id
          var newCar = new Car(id, "127.0.0.1", port, x, y, x2, y2, new Array(), new Array(), new Array());
          map.objects[x][y] = id
          mapCopy.cars.push(newCar);
          setMap({...mapCopy})
          break;
        case "b":
          addNewBuilding(x,y)
          break;
        case "cc":
          addNewCarCrash(x,y)
          break;
        case "p":
          addNewParking(x,y)
          break;
        }
    }else{
      setobjectToAdd(type);
    }
  }
  return (
    <div style={{width: '100%', height: '100%', backgroundColor: Colors.background}}>
      <Header screen={screen} changeScreen={changeScreen}/>
      <GeneralScreen 
                  started={started} 
                  startStopSimulation={startStopSimulation}
                  mapClickableOnClick={mapClickableOnClick}
                  map={map}
                  addObject={addObject}
                  objectToAdd={objectToAdd}
                  screen={screen}
                  selectedCar={selectedCar}/>
    </div>
  );
}