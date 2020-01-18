import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { FaCar, FaBuilding, FaCarCrash, FaParking } from 'react-icons/fa';
import Select from 'react-select'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

class Tools extends Component {
  render() {
    const divStyle = {
        width: '100%',
        height: '100%'
    };
    const carOptions = [
        { value: 'regular', label: 'Regular car' },
        { value: 'police', label: 'Police car' },
        { value: 'ambulance', label: 'Ambulance' }
    ]
    return (
        <div style={divStyle}>
            <div style={{widht: '100%', height: '32%', marginBottom: '2%'}}>
                <Card style={{width: '49%', height: '100%', float: "left"}}>
                        <div style={{widht: "100%", height: "20%", backgroundColor: "white", color: "#0e4f88", display: "flex", paddingLeft: "18px", paddingTop: "10px"}}>
                            <FaCar style={{marginBottom: "auto", marginTop: "auto", fontSize: "28px"}}/>
                        </div>
                        <div style={{position: "relative", height: "80%", width: "100%", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px"}}>
                            <Select options={carOptions} />
                            <div style={{marginTop: "15px", display: "flex"}}>
                                <Toggle
                                    defaultChecked={true}
                                    />
                                <span style={{marginBottom: "auto", marginTop: "auto", textAlign: "left", marginLeft: "4px"}}>Random position</span>
                            </div>
                            <AwesomeButton type="link" style={{position: "absolute", bottom: "15px", width: "92%", height: "25%", backgroundColor: "white", zIndex: 0}}>
                                Add new car
                            </AwesomeButton>
                        </div>
                </Card>
                <Card style={{width: '49%', height: '100%', float: "right"}}>
                        <div style={{widht: "100%", height: "20%", backgroundColor: "white", color: "#0e4f88", display: "flex", paddingLeft: "18px", paddingTop: "10px"}}>
                            <FaBuilding style={{marginBottom: "auto", marginTop: "auto", fontSize: "28px"}}/>
                        </div>
                        <div style={{position: "relative", height: "80%", width: "100%", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px"}}>
                            <Select options={carOptions} />
                            <div style={{marginTop: "15px", display: "flex"}}>
                                <Toggle
                                    defaultChecked={true}
                                    />
                                <span style={{marginBottom: "auto", marginTop: "auto", textAlign: "left", marginLeft: "4px"}}>Random position</span>
                            </div>
                            <AwesomeButton type="link" style={{position: "absolute", bottom: "15px", width: "92%", height: "25%", backgroundColor: "white", zIndex: 0}}>
                                Add new building
                            </AwesomeButton>
                        </div>
                </Card>
            </div>
            <div style={{widht: '100%', height: '32%', marginBottom: '2%'}}>
                <Card style={{width: '49%', height: '100%', float: "left"}}>
                        <div style={{widht: "100%", height: "20%", backgroundColor: "white", color: "#0e4f88", display: "flex", paddingLeft: "18px", paddingTop: "10px"}}>
                            <FaCarCrash style={{marginBottom: "auto", marginTop: "auto", fontSize: "28px"}}/>
                        </div>
                        <div style={{position: "relative", height: "80%", width: "100%", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px"}}>
                            <Select options={carOptions} style={{zIndex: 3}} />
                            <div style={{marginTop: "15px", display: "flex"}}>
                                <Toggle
                                    defaultChecked={true}
                                    />
                                <span style={{marginBottom: "auto", marginTop: "auto", textAlign: "left", marginLeft: "4px"}}>Random position</span>
                            </div>
                            <AwesomeButton type="link" style={{position: "absolute", bottom: "15px", width: "92%", height: "25%", backgroundColor: "white", zIndex: 0}}>
                                Add new car crash
                            </AwesomeButton>
                        </div>
                </Card>
                <Card style={{width: '49%', height: '100%', float: "right"}}>
                        <div style={{widht: "100%", height: "20%", backgroundColor: "white", color: "#0e4f88", display: "flex", paddingLeft: "18px", paddingTop: "10px"}}>
                            <FaParking style={{marginBottom: "auto", marginTop: "auto", fontSize: "28px"}}/>
                        </div>
                        <div style={{position: "relative", height: "80%", width: "100%", paddingBottom: "15px", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px"}}>
                            <Select options={carOptions} />
                            <div style={{marginTop: "15px", display: "flex"}}>
                                <Toggle
                                    defaultChecked={true}
                                    />
                                <span style={{marginBottom: "auto", marginTop: "auto", textAlign: "left", marginLeft: "4px"}}>Random position</span>
                            </div>
                            <AwesomeButton type="link" style={{position: "absolute", bottom: "15px", width: "92%", height: "25%", backgroundColor: "white", zIndex: 0}}>
                                Add new parking spot
                            </AwesomeButton>
                        </div>
                </Card>
            </div>
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