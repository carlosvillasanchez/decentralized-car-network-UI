import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Area = props => {
    const divStyle = {
        width: '100%',
        height: '100%',
        flexGrow: 1
    };
    return (
        <div style={{...props.style, ...divStyle, fontSize: '6vw', textAlign: "center", display: "flex"}}>
           <div style={{margin: "auto"}}>
               H
            </div>
        </div>
                
    );
}

export default Area;