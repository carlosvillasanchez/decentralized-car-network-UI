import { createEmptyMap } from  './auxiliaryFunctions';
import Message from '../models/message';

function toServerSendStop(){
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()
  
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    
    // open the request with the verb and the url
    xhr.open('POST', 'http://localhost:8086/stop')
    // send the request
    //xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send()
}

function toServerSendSetup(map){
    let buildingsArray = []
    let carsArray = []
    let carCrashesArray = []
    let parkingSpotsArray = []
    for (var i = 0; i<map.cars.length; i++){
      var to_push = []
      to_push.push(map.cars[i].id)
      to_push.push(map.cars[i].IP)
      to_push.push(map.cars[i].port)
      to_push.push(map.cars[i].initialX)
      to_push.push(map.cars[i].initialY)
      to_push.push(map.cars[i].destinyX)
      to_push.push(map.cars[i].destinyY)
      carsArray.push(to_push)
    }
    for (var i = 0; i<map.buildings.length; i++){
      var to_push = []
      to_push.push(map.buildings[i].id)
      to_push.push(map.buildings[i].x)
      to_push.push(map.buildings[i].y)
      buildingsArray.push(to_push)
    }
    for (var i = 0; i<map.carCrashes.length; i++){
      var to_push = []
      to_push.push(map.carCrashes[i].id)
      to_push.push(map.carCrashes[i].x)
      to_push.push(map.carCrashes[i].y)
      carCrashesArray.push(to_push)
    }
    for (var i = 0; i<map.parkingSpots.length; i++){
      var to_push = []
      to_push.push(map.parkingSpots[i].id)
      to_push.push(map.parkingSpots[i].x)
      to_push.push(map.parkingSpots[i].y)
      parkingSpotsArray.push(to_push)
    }
    let dict_toSend = {
      "buildings": buildingsArray,
      "cars": carsArray,
      "carcrashes": carCrashesArray,
      "parkingspots": parkingSpotsArray
    }
    let params = ""
    for (var key in dict_toSend) {
      params += key + "=" + dict_toSend[key] + "&"
    }
    console.log(dict_toSend, params)
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()
  
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    
    // open the request with the verb and the url
    xhr.open('POST', 'http://localhost:8086/setup?' + params)
    // send the request
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send()
}

function toServerAddCarCrash(carCrash){
    let carCrashInArray = []
    carCrashInArray.push(carCrash.id)
    carCrashInArray.push(carCrash.x)
    carCrashInArray.push(carCrash.y)

    let dict_toSend = {
        "carCrash": carCrashInArray
    }

    let params = ""
    for (var key in dict_toSend) {
      params += key + "=" + dict_toSend[key] + "&"
    }
    console.log(dict_toSend, params)
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()
  
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    
    // open the request with the verb and the url
    xhr.open('POST', 'http://localhost:8086/addCarCrash?' + params)
    // send the request
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send()
}

function toServerAddParkingSpot(parkingSpot){
    let parkingSpotInArray = []
    parkingSpotInArray.push(parkingSpot.id)
    parkingSpotInArray.push(parkingSpot.x)
    parkingSpotInArray.push(parkingSpot.y)

    let dict_toSend = {
        "parkingSpot": parkingSpotInArray
    }

    let params = ""
    for (var key in dict_toSend) {
      params += key + "=" + dict_toSend[key] + "&"
    }
    console.log(dict_toSend, params)
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()
  
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    
    // open the request with the verb and the url
    xhr.open('POST', 'http://localhost:8086/addParkingSpot?' + params)
    // send the request
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send()
}


function toServerAddCar(car){
    let carInArray = []
    carInArray.push(car.id)
    carInArray.push(car.IP)
    carInArray.push(car.port)
    carInArray.push(car.initialX)
    carInArray.push(car.initialY)
    carInArray.push(car.destinyX)
    carInArray.push(car.destinyY)
    let dict_toSend = {
        "car": carInArray
    }

    let params = ""
    for (var key in dict_toSend) {
      params += key + "=" + dict_toSend[key] + "&"
    }
    console.log(dict_toSend, params)
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()
  
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    
    // open the request with the verb and the url
    xhr.open('POST', 'http://localhost:8086/addCar?' + params)
    // send the request
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send()
}

function toServerUpdate(map, setMap){
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()
  
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
        let data = JSON.parse(xhr.response);
        var mapCopy = map;
        let dictOfMessages = data["Messages"]
        let dictOfCars = data["Pos"]
        console.log("MESSAGES", dictOfMessages)
        for(var i=0; i<map.cars.length; i++){
            let id = mapCopy.cars[i].id;
            if(id in dictOfCars){
                mapCopy.cars[i].initialX = dictOfCars[id][0]
                mapCopy.cars[i].initialY = dictOfCars[id][1]
                mapCopy.cars[i].destinyX = dictOfCars[id][2]
                mapCopy.cars[i].destinyY = dictOfCars[id][3]
            }
            if(id in dictOfMessages){
                console.log("SI")
                for(var j=0; j<dictOfMessages[id].length; j++){
                    let newMessage = new Message(
                        dictOfMessages[id][j]["Type"],
                        dictOfMessages[id][j]["Text"],
                    )
                    console.log("MESSAGE", newMessage)
                    mapCopy.cars[i].messages = [newMessage, ...mapCopy.cars[i].messages];
                }
            }
            console.log("UPADTING CAR", id, mapCopy.cars[i])
        }
        mapCopy.labels = newLabels(map)
        mapCopy.objects = newObjects(map)
        setMap({...mapCopy})
    })
    
    // open the request with the verb and the url
    xhr.open('Get', 'http://localhost:8086/update')
    // send the request
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send()
    
}

export { toServerSendSetup, toServerAddCarCrash, toServerAddParkingSpot, toServerAddCar, toServerUpdate, toServerSendStop }


// NOT EXPORTED FUNCTIONS //

function newLabels(map){
    let toReturn = createEmptyMap()
    for(var i=0; i<map.parkingSpots.length; i++){
        let p = map.parkingSpots[i]
        toReturn[p.x][p.y] = "p"
    }
    for(var i=0; i<map.carCrashes.length; i++){
        let cc = map.carCrashes[i]
        toReturn[cc.x][cc.y] = "cc"
    }
    for(var i=0; i<map.buildings.length; i++){
        let b = map.buildings[i]
        toReturn[b.x][b.y] = "b"
    }
    for(var i=0; i<map.cars.length; i++){
        let c = map.cars[i]
        if(c.id === "police"){
            if(c.initialX!==-1 && c.initialY!==-1){
                toReturn[c.initialX][c.initialY] = "police"
            }
        }else{
            toReturn[c.initialX][c.initialY] = "c"
        }
    }
    return toReturn;
}

function newObjects(map){
    let toReturn = createEmptyMap();
    for(var i=0; i<map.cars.length; i++){
        let c = map.cars[i]
        if(c.initialX!==-1 && c.initialY!==-1){
            toReturn[c.initialX][c.initialY] = c.id;
        }
        
    }
    return toReturn;
}