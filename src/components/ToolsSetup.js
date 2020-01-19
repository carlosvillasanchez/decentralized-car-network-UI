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
const initialRandomState = [true, true, true, true]
const ToolsSetup = props => {
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
    return (
        <div style={divStyle}>
            {/*ROW 1 OF TOOLS*/}
            <div style={{widht: '100%', height: '32%', marginBottom: '2%'}}>
                <Card style={{width: '49%', height: '100%', float: "left"}}>
                        <div style={{widht: "100%", height: "20%", backgroundColor: "white", color: Colors.primary, display: "flex", paddingLeft: "18px", paddingTop: "10px"}}>
                            <FaCar style={{marginBottom: "auto", marginTop: "auto", fontSize: "28px"}}/>
                        </div>
                        <div style={{position: "relative", height: "80%", width: "100%", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px"}}>
                            <Select options={carOptions} />
                            <div style={{marginTop: "15px", display: "flex"}}>
                                <Toggle
                                    defaultChecked={true}
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
                <Card style={{width: '49%', height: '100%', float: "right"}}>
                        <div style={{widht: "100%", height: "20%", backgroundColor: "white", color: Colors.primary, display: "flex", paddingLeft: "18px", paddingTop: "10px"}}>
                            <FaBuilding style={{marginBottom: "auto", marginTop: "auto", fontSize: "28px"}}/>
                        </div>
                        <div style={{position: "relative", height: "80%", width: "100%", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px"}}>
                            <Select options={carOptions} />
                            <div style={{marginTop: "15px", display: "flex"}}>
                                <Toggle
                                    defaultChecked={true}
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
            <div style={{widht: '100%', height: '32%', marginBottom: '2%'}}>
                <Card style={{width: '49%', height: '100%', float: "left"}}>
                        <div style={{widht: "100%", height: "20%", backgroundColor: "white", color: Colors.primary, display: "flex", paddingLeft: "18px", paddingTop: "10px"}}>
                            <FaCarCrash style={{marginBottom: "auto", marginTop: "auto", fontSize: "28px"}}/>
                        </div>
                        <div style={{position: "relative", height: "80%", width: "100%", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px"}}>
                            <Select options={carOptions} style={{zIndex: 3}} />
                            <div style={{marginTop: "15px", display: "flex"}}>
                                <Toggle
                                    defaultChecked={true}
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
                            <Select options={carOptions} />
                            <div style={{marginTop: "15px", display: "flex"}}>
                                <Toggle
                                    defaultChecked={true}
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
            <Card style={{widht: '100%', height: '32%'}}>
                <Card.Body>
                    <Card.Title>Start simulation</Card.Title>
                    <Card.Text>
                        If you start simulation (...)
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
            </Card>
        </div>
    );
}

export default ToolsSetup;