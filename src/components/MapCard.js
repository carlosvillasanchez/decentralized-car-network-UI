import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Map from './Map'


class MapCard extends Component {
  render() {
    const divStyle = {
        width: '100%',
        height: '100%'
    };
    return (
        <Card style={divStyle}>
            <Card.Body style={{height: "100%", width: "100%", display: "flex", flexDirection: 'column'}}>
                <Card.Title>MAP</Card.Title>
                <Card.Text style={{flexGrow: 1, padding: "10px"}}>
                  <Map/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
  }
}

export default MapCard;