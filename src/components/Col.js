import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { FaCar, FaBuilding, FaCarCrash, FaParking } from 'react-icons/fa';

///// Own code imports
import Colors from '../constants/colors'

let dict_Objects = {
    "b":  <span  style={{fontSize: "1.5rem"}}><FaBuilding/></span>,
    "c": <span style={{color: Colors.primary, fontSize: "1.5rem"}}><FaCar/></span>,
    "cc": <span style={{color: "red", fontSize: "1.5rem"}}><FaCarCrash/></span>,
    "p": <span style={{color: Colors.primary, fontSize: "1.5rem"}}><FaParking/></span>
}

const Col = props => {
    let incrementArray = Array.from(Array(props.nRows).keys())
    console.log(props.nRows)
    let content = incrementArray.map((rowNumber) => {
        let key = "" + rowNumber + props.colNumber
        let label = <span style={{color: "transparent", fontSize: "1.5rem"}}>X</span>
        if (props.mapLabels[rowNumber]){
            label = dict_Objects[props.mapLabels[rowNumber]]
        }else if(props.isObjectToAdd){
            return(
                <Button 
                variant="outline-secondary" 
                key={key} 
                style={{borderRadius: 0}} 
                onClick={() => props.onClick(props.colNumber, rowNumber)}>
                    <span style={{fontSize: "1.5rem"}}>X</span>
                </Button> 
            )
        }
        return <Button 
                    variant="outline-secondary" 
                    key={key} 
                    style={{borderRadius: 0}} 
                    onClick={() => props.onClick(props.colNumber, rowNumber)}>
                {label}
                </Button>
    })
    return (
            <ButtonGroup aria-label="Basic example" style={{height: '100%', width: props.width + "%", borderRadius: 0}} vertical>
                {content}
            </ButtonGroup>
        
                
    );
}

export default Col;