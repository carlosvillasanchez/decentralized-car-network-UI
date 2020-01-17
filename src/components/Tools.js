import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class Tools extends Component {
  render() {
    const divStyle = {
        width: '100%',
        height: '100%'
    };
    return (
        <div style={divStyle}>
            <div style={{widht: '100%', height: '32%', marginBottom: '2%'}}>
                <Card style={{width: '32%', height: '100%', marginRight: '2%', float: "left"}}>
                    <Card.Body>
                        <Card.Title>TIER 1</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{width: '32%', height: '100%', marginRight: '2%', float: "left"}}>
                    <Card.Body>
                        <Card.Title>TIER 1</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{width: '32%', height: '100%', float: "right"}}>
                    <Card.Body>
                        <Card.Title>TIER 1</Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Card style={{widht: '100%', height: '32%', marginBottom: '2%'}}>
                <Card.Body>
                    <Card.Title>TIER 2</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{widht: '100%', height: '32%'}}>
                <Card.Body>
                    <Card.Title>TIER 3</Card.Title>
                    <Card.Text>
                    
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
  }
}

export default Tools;