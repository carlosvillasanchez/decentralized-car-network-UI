import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Area from './Area'

///// Own code imports
import Colors from '../constants/colors'

const MapCard = props => {
    const divStyle = {
        width: '100%',
        height: '100%'
    };
    return (
        <div style={{border: "2px solid " + Colors.text, display: "flex", flexDirection: 'row', borderRadius: "10px", ...divStyle}}>
            <div style={{borderRight: "2px solid " + Colors.text, flexGrow: 1, height: "100%", display: "flex", flexDirection: 'column'}}>
                <Area
                    style={{borderBottom: "2px solid " + Colors.text}}
                />
                <Area
                    style={{borderBottom: "2px solid " + Colors.text}}
                />
                <Area
                    style={{}}
                />
            </div>
            <div style={{borderRight: "2px solid " + Colors.text, flexGrow: 1, height: "100%", display: "flex", flexDirection: 'column'}}>
                <Area
                    style={{borderBottom: "2px solid " + Colors.text}}
                />
                <Area
                    style={{borderBottom: "2px solid " + Colors.text}}
                />
                <Area
                    style={{}}
                />
            </div>
            <div style={{flexGrow: 1, height: "100%", display: "flex", flexDirection: 'column'}}>
                <Area
                    style={{borderBottom: "2px solid " + Colors.text}}
                />
                <Area
                    style={{borderBottom: "2px solid " + Colors.text}}
                />
                <Area
                    style={{}}
                />
            </div>
        </div>
                
    );
}

export default MapCard;