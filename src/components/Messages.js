import React, { Component, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup'
import { FaCar, FaBuilding, FaCarCrash, FaParking } from 'react-icons/fa';
import Select from 'react-select'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

import { AwesomeButton } from "react-awesome-button";
import "../assets/stylesButton.css";

///// Own code imports
import Colors from '../constants/colors'

const initialFilterState = [true, true, true, true]
const Messages = props => {
    
    let [filterState, setFilterState] = useState(initialFilterState)

    let styleButtons = {
        true: {backgroundColor: Colors.primary, color: "white", textAlign: "center", fontFamily: "inherit"},
        false: {textAlign: "center"}
    }

    const divStyle = {
        width: '100%',
        height: '100%'
    };

    function changeState(index){
        let filterStateCopy = filterState
        filterStateCopy[index] = !filterState[index]
        setFilterState([...filterStateCopy])
    }

    let messagesToRender = props.renderer.map(obj => {
        return <div><span>{obj}</span><br/></div>  
    });

    return (
        <div style={divStyle}>
            <Card style={{width: '100%', height: '100%'}}>
                    <div style={{widht: "100%", height: "7%", backgroundColor: "white", color: Colors.primary, display: "flex", paddingLeft: "25px", paddingRight: "25px", paddingTop: "25px"}}>
                        <div style={{height: "100%", display: "flex"}}>
                            <Toggle
                                defaultChecked={true}
                                onChange={() => {}}
                                />
                            <span style={{marginBottom: "auto", marginTop: "auto", textAlign: "left", marginLeft: "4px"}}>
                                Car crash avoidance
                            </span>
                        </div>
                        <div style={{height: "100%", marginLeft: "21px", display: "flex"}}>
                            <Toggle
                                defaultChecked={true}
                                onChange={() => {}}
                                />
                            <span style={{marginBottom: "auto", marginTop: "auto", textAlign: "left", marginLeft: "4px"}}>
                                Car crash informing
                            </span>
                        </div>
                        <div style={{height: "100%", marginLeft: "21px", display: "flex"}}>
                            <Toggle
                                defaultChecked={true}
                                onChange={() => {}}
                                />
                            <span style={{marginBottom: "auto", marginTop: "auto", textAlign: "left", marginLeft: "4px"}}>
                                Parking informing
                            </span>
                        </div>
                        <div style={{height: "100%", marginLeft: "21px", display: "flex"}}>
                            <Toggle
                                defaultChecked={true}
                                onChange={() => {}}
                                />
                            <span style={{marginBottom: "auto", marginTop: "auto", textAlign: "left", marginLeft: "4px"}}>
                                Everything else
                            </span>
                        </div>
                    </div>
                    <div  style={{position: "relative", height: "93%", width: "100%", overflow: "scroll", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px", marginTop: "30px"}}>
                        {messagesToRender}
                    </div> 
            </Card>
        </div>
    );
}

export default Messages;