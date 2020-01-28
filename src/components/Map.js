import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from './Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import SimulationConstants from '../constants/simulationConstants';

///// Own code imports
import Colors from '../constants/colors'

const Map = props => {
    let xSelectedCar = -1
    let ySelectedCar = -1
    if(props.screen === "Individual"){
        console.log("SELECTED CAR:",xSelectedCar, ySelectedCar)
        xSelectedCar = props.selectedCar.initialX
        ySelectedCar = props.selectedCar.initialY
    }

    const divStyle = {
        width: '100%',
        height: '100%',
        marginLeft: '0%',
        marginRight: '0%'
    };
    var xRange = SimulationConstants.XCells*SimulationConstants.XAreas;
    var yRange = SimulationConstants.YCells*SimulationConstants.YAreas;
    var widthOfCol = 100/xRange
    let incrementArray = Array.from(Array(xRange).keys())
    let content = incrementArray.map((colNumber) => {
        console.log("EJE", colNumber, props.mapLabels[colNumber])
        if(colNumber === xSelectedCar){
            return <Col 
                        nRows={yRange} 
                        colNumber={colNumber} 
                        width={widthOfCol} 
                        onClick={props.onClick}
                        mapLabels={props.mapLabels[colNumber]}
                        isObjectToAdd={props.isObjectToAdd}
                        selectedCar={ySelectedCar}/>
        }
        return <Col 
                    nRows={yRange} 
                    colNumber={colNumber} 
                    width={widthOfCol} 
                    onClick={props.onClick}
                    mapLabels={props.mapLabels[colNumber]}
                    isObjectToAdd={props.isObjectToAdd}
                    selectedCar={-1}/>
    }
    )
    
    
    return (
        <div style={{...divStyle}}>
            {content}
        </div>
                
    );
}

export default Map;