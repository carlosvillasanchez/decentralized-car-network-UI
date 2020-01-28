import React, { Component, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { FaCar, FaBuilding, FaCarCrash, FaParking } from 'react-icons/fa';
import Select from 'react-select'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

import { AwesomeButton } from "react-awesome-button";
import "../assets/stylesButton.css";

///// Own code imports
import Colors from '../constants/colors'

const typeObjectOrder = ["c", "b", "cc", "p"]
const initialRandomState = [false, false, false, false]
const Tools = props => {
    let [randomState, setRandomState] = useState(initialRandomState);
    const divStyle = {
        width: '100%',
        height: '100%'
    };
    const carOptions = [
        { value: 'regular', label: 'Regular car' },
        { value: 'police', label: 'Police car' },
        { value: 'ambulance', label: 'Ambulance' }
    ]
    function changeRandom(index){
        var randomStateCopy = randomState;
        randomStateCopy[index] = !randomStateCopy[index]
        setRandomState([...randomStateCopy])
    }
    function addObject(index){
        props.addObject(typeObjectOrder[index], randomState[index])
    }
    let disableCard = {}
    let startStopCardBody = <Card.Body>
            <Card.Title>Start simulation</Card.Title>
            <Card.Text>
                When starting the simulation, all nodes (cars) are deployed and they will start moving in the map. During the simulation you will be able to add new cars, car crashes and parking spots. Buildings are not allowd.
                <br/>
                <AwesomeButton 
                    type="link" 
                    style={{position: "absolute", bottom: "15px", width: "94%", height: "25%", backgroundColor: "white", zIndex: 0}}
                    onPress={() => props.startStopSimulation(true)}
                >
                    Start simulation
                </AwesomeButton>
            </Card.Text>
        </Card.Body>

    if(props.started){
        console.log("STARTING")
        disableCard = {pointerEvents: "none", opacity: 0.4}
        startStopCardBody = <Card.Body>
                <Card.Title>Stop simulation</Card.Title>
                <Card.Text>
                    If you stop the simulation, all nodes (cars) will be destroyed and so the simulation. You will be able to start a new one, but not resume the current one.
                    <br/>
                    <AwesomeButton 
                        type="secondary" 
                        style={{position: "absolute", bottom: "15px", width: "94%", height: "25%", backgroundColor: "white", zIndex: 0}}
                        onPress={() => props.startStopSimulation(false)}
                    >
                        Stop simulation
                    </AwesomeButton>
                </Card.Text>
            </Card.Body>
    }
    return (
        <div style={divStyle}>
            {/*ROW 1 OF TOOLS*/}
            <div style={{widht: '100%', height: '31.5%', marginBottom: '2%'}}>
                <Card style={{width: '49%', height: '100%', float: "left"}}>
                        <div style={{widht: "100%", height: "20%", backgroundColor: "white", color: Colors.primary, display: "flex", paddingLeft: "18px", paddingTop: "10px"}}>
                            <FaCar style={{marginBottom: "auto", marginTop: "auto", fontSize: "28px"}}/>
                        </div>
                        <div style={{position: "relative", height: "80%", width: "100%", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px"}}>
                            <span>
                                If you do not choose "random position", you will have to specify the origin and destination of the car.
                            </span>
                            <div style={{marginTop: "15px", display: "flex"}}>
                                <Toggle
                                    defaultChecked={false}
                                    onChange={() => changeRandom(0)}
                                    />
                                <span style={{marginBottom: "auto", marginTop: "auto", textAlign: "left", marginLeft: "4px"}}>Random position</span>
                            </div>
                            <AwesomeButton 
                                type="link" 
                                style={{position: "absolute", bottom: "15px", width: "92%", height: "25%", backgroundColor: "white", zIndex: 0}}
                                onPress={() => addObject(0)}>
                                Add new car
                            </AwesomeButton>
                        </div>
                </Card>
                <Card style={{width: '49%', height: '100%', float: "right", ...disableCard}}>
                        <div style={{widht: "100%", height: "20%", backgroundColor: "white", color: Colors.primary, display: "flex", paddingLeft: "18px", paddingTop: "10px"}}>
                            <FaBuilding style={{marginBottom: "auto", marginTop: "auto", fontSize: "28px", color: "#6c757d"}}/>
                        </div>
                        <div style={{position: "relative", height: "80%", width: "100%", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px"}}>
                            <span>
                                Buildings are obstacles that cars will avoid while moving in the map.
                            </span>
                            <div style={{marginTop: "15px", display: "flex"}}>
                                <Toggle
                                    defaultChecked={false}
                                    onChange={() => changeRandom(1)}
                                    />
                                <span style={{marginBottom: "auto", marginTop: "auto", textAlign: "left", marginLeft: "4px"}}>Random position</span>
                            </div>
                            <AwesomeButton 
                                type="link" 
                                style={{position: "absolute", bottom: "15px", width: "92%", height: "25%", backgroundColor: "white", zIndex: 0}}
                                onPress={() => addObject(1)}>
                                Add new building
                            </AwesomeButton>
                        </div>
                </Card>
            </div>
            
            {/*ROW 2 OF TOOLS*/}
            <div style={{widht: '100%', height: '31.5%', marginBottom: '2%'}}>
                <Card style={{width: '49%', height: '100%', float: "left"}}>
                        <div style={{widht: "100%", height: "20%", backgroundColor: "white", color: Colors.primary, display: "flex", paddingLeft: "18px", paddingTop: "10px"}}>
                            <FaCarCrash style={{marginBottom: "auto", marginTop: "auto", fontSize: "28px", color: "red"}}/>
                        </div>
                        <div style={{position: "relative", height: "80%", width: "100%", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px"}}>
                            <span>
                                If a car discovers a car crash, it will inform the police, which moves in the map like a additional car. 
                            </span>
                            <div style={{marginTop: "15px", display: "flex"}}>
                                <Toggle
                                    defaultChecked={false}
                                    onChange={() => changeRandom(2)}
                                    />
                                <span style={{marginBottom: "auto", marginTop: "auto", textAlign: "left", marginLeft: "4px"}}>Random position</span>
                            </div>
                            <AwesomeButton 
                                type="link"
                                style={{position: "absolute", bottom: "15px", width: "92%", height: "25%", backgroundColor: "white", zIndex: 0}}
                                onPress={() => addObject(2)}>
                                Add new car crash
                            </AwesomeButton>
                        </div>
                </Card>
                <Card style={{width: '49%', height: '100%', float: "right"}}>
                        <div style={{widht: "100%", height: "20%", backgroundColor: "white", color: Colors.primary, display: "flex", paddingLeft: "18px", paddingTop: "10px"}}>
                            <FaParking style={{marginBottom: "auto", marginTop: "auto", fontSize: "28px"}}/>
                        </div>
                        <div style={{position: "relative", height: "80%", width: "100%", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px"}}>
                            <span>
                                If a car discovers a parking spot, it will inform those cars subscribed to the news group.
                            </span>
                            <div style={{marginTop: "15px", display: "flex"}}>
                                <Toggle
                                    defaultChecked={false}
                                    onChange={() => changeRandom(3)}
                                    />
                                <span style={{marginBottom: "auto", marginTop: "auto", textAlign: "left", marginLeft: "4px"}}>Random position</span>
                            </div>
                            <AwesomeButton 
                                type="link"
                                style={{position: "absolute", bottom: "15px", width: "92%", height: "25%", backgroundColor: "white", zIndex: 0}}
                                onPress={() => addObject(3)}>
                                Add new parking spot
                            </AwesomeButton>
                        </div>
                </Card>
            </div>
            
            {/*ROW 3 OF TOOLS*/}
            <Card style={{widht: '100%', height: '30%'}}>
                {startStopCardBody}
            </Card>
        </div>
    );
}

export default Tools;