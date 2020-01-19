import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import MapCard from './MapCard'
import Tools from './Tools'
import ToolsSetup from './ToolsSetup'

const Home = props => {
  const divStyle = {
      width: '100%',
      height: '87%',
      paddingTop: "20px",
      paddingLeft: '2%',
      paddingRight: '2%'
  };
  console.log("ICI", props.started, props.map)
  let tools = <ToolsSetup startStopSimulation={props.startStopSimulation} addObject={props.addObject}/>
  if(props.started){
    tools = <Tools startStopSimulation={props.startStopSimulation}/>
  }
  return (
    <div style={divStyle}>
        <div style={{display: "inline-block", height: "100%", width: "51%", float: "left"}}>
          <MapCard mapClickable={props.mapClickable} mapClickableOnClick={props.mapClickableOnClick} mapLabels={props.map.labels}/>
        </div>
        <div style={{display: "inline-block", width: '47%', height: '100%', float: "right" }}>
          {tools}
      </div>
    </div>
  );
}


export default Home;