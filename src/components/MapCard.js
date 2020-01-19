import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Map from './Map'
import MapClickable from './MapClickable'

const MapCard = (props) => {
  const divStyle = {
      width: '100%',
      height: '100%'
  };

  let mapContent = <Map/>
  console.log("EPA", props.mapClickable)
  if (props.mapClickable) {
    mapContent = <MapClickable 
      onClick={props.mapClickableOnClick} 
      mapLabels={props.mapLabels}
      isObjectToAdd={props.isObjectToAdd}/>
  }

  return (
      <Card style={divStyle}>
          <Card.Body style={{height: "100%", width: "100%", display: "flex", flexDirection: 'column'}}>
              <Card.Title>MAP</Card.Title>
              <Card.Text style={{flexGrow: 1, padding: "10px"}}>
                {mapContent}
              </Card.Text>
          </Card.Body>
      </Card>
  );
}


export default MapCard;