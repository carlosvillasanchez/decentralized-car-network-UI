import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Map from './Map'
import { AwesomeButton } from "react-awesome-button";
import "../assets/stylesButton.css";
import Colors from '../constants/colors'

import ViceCity from '../assets/viceCity.png';

const MapCard = (props) => {
  const divStyle = {
      width: '100%',
      height: '100%',
      marginBottom: "0px"
  };

  let cardTitle = <Card.Title>
                    <img
                    src={ViceCity}
                    height="70px"/>
                  </Card.Title>
  if(!props.started){
    cardTitle = <Card.Title>
                    <img
                    src={ViceCity}
                    height="70px"/>
                    <AwesomeButton 
                      type="primary" 
                      style={{
                        backgroundColor: "white",
                        zIndex: 0,
                        float: "right",
                        marginRight: "10px",
                        height: "50px",
                        width: "140px",
                        marginTop: "10px"
                      }}
                      onPress={() => {props.clearMap()}}
                    >
                        Clear map
                    </AwesomeButton>
                  </Card.Title>
  }
  return (
      <Card style={divStyle}>
          <Card.Body style={{height: "100%", width: "100%", display: "flex", flexDirection: 'column'}}>
              {cardTitle}
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