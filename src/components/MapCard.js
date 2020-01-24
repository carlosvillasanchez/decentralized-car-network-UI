import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Map from './Map'

const MapCard = (props) => {
  const divStyle = {
      width: '100%',
      height: '100%',
      marginBottom: "0px"
  };

  return (
      <Card style={divStyle}>
          <Card.Body style={{height: "100%", width: "100%", display: "flex", flexDirection: 'column'}}>
              <Card.Title>Vice City</Card.Title>
              <Card.Text style={{flexGrow: 1, padding: "10px"}}>
              <Map 
                onClick={props.mapClickableOnClick} 
                mapLabels={props.mapLabels}
                isObjectToAdd={props.isObjectToAdd}
                screen={props.screen}
                selectedCar={props.selectedCar}/>
              </Card.Text>
          </Card.Body>
      </Card>
  );
}


export default MapCard;