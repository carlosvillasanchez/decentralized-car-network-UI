import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { FaCar, FaBuilding, FaCarCrash, FaParking } from 'react-icons/fa';
import { GiSiren } from 'react-icons/gi'

///// Own code imports
import Colors from '../constants/colors'

let dict_Objects = {
    "b":  <span  style={{fontSize: "1.5rem"}}><FaBuilding/></span>,
    "c": <span style={{color: Colors.primary, fontSize: "1.5rem"}}><FaCar/></span>,
    "cs": <span style={{color: "green", fontSize: "1.5rem"}}><FaCar/></span>,
    "cc": <span style={{color: "red", fontSize: "1.5rem"}}><FaCarCrash/></span>,
    "p": <span style={{color: Colors.primary, fontSize: "1.5rem"}}><FaParking/></span>,
    "police": <span style={{color: "red", fontSize: "1.5rem"}}><GiSiren/></span>
}

const Col = props => {
    let borderStyle = {}
    if(props.colNumber === 4){
        borderStyle = {borderRightColor: "black", borderRightWidth: "1.5px"}
    }else if(props.colNumber === 5){
        borderStyle = {borderLeftColor: "black", borderLeftWidth: "1.5px"}
    }
    let incrementArray = Array.from(Array(props.nRows).keys())
    console.log(props.nRows)
    let content = incrementArray.map((rowNumber) => {
        let key = "" + rowNumber + props.colNumber
        let label = <span style={{color: "transparent", fontSize: "1.5rem"}}>X</span>
        let borderStyleInside = {...borderStyle}
        if (rowNumber === 4){
            borderStyleInside = {...borderStyleInside, borderBottomColor: "black", borderBottomWidth: "1.5px"}
        }else if (rowNumber === 5){
            borderStyleInside = {...borderStyleInside, borderTopColor: "black", borderTopWidth: "1.5px"}
        }
        if (props.mapLabels[rowNumber]){
            if(props.mapLabels[rowNumber] === "c" && props.selectedCar === rowNumber){
                label = dict_Objects[props.mapLabels[rowNumber]+ "s"]
            }else{
                label = dict_Objects[props.mapLabels[rowNumber]]
            }
        }else if(props.isObjectToAdd){
            return(
                <Button 
                variant="outline-secondary" 
                key={key} 
                style={{...borderStyleInside, borderRadius: 0}} 
                onClick={() => props.onClick(props.colNumber, rowNumber)}>
                    <span style={{fontSize: "1.5rem"}}>X</span>
                </Button> 
            )
        }
        return <Button 
                    variant="outline-secondary" 
                    key={key} 
                    style={{...borderStyleInside, borderRadius: 0}} 
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