import React, { useState } from "react";

import MapCard from './MapCard';
import Tools from './Tools';
import Messages from './Messages';
import ReactInterval from 'react-interval';

const GeneralScreen = props => {
  if(props.screen === "Individual" && !props.started){
    return(
      <div>
        First define a map please! 
      </div>
    );
  }
  let isObjectToAdd = false
  if (props.objectToAdd !== ""){
    isObjectToAdd = true
  }
  const divStyle = {
      width: '100%',
      height: '88%',
      paddingTop: "20px",
      paddingLeft: '2%',
      paddingRight: '2%'
  };

  // TOOLS TO RENDER
  let toolsToRender = <Tools 
                        startStopSimulation={props.startStopSimulation} 
                        addObject={props.addObject}
                        started={props.started}/>
  

  // MAP TO RENDER
  let mapToRender = <MapCard
                      mapClickableOnClick={props.mapClickableOnClick} 
                      mapLabels={props.map.labels}
                      isObjectToAdd={isObjectToAdd}
                      screen={props.screen}
                      selectedCar={props.selectedCar}
                      started={props.started}
                      clearMap={props.clearMap}/>
  if(props.screen === "Individual"){
    toolsToRender = <Messages messages={props.selectedCar.messages}/>
        
  }
  return (
    <div style={divStyle}>
        <div style={{display: "inline-block", height: "100%", width: "41%", float: "left"}}>
          {mapToRender}
        </div>
        <div style={{display: "inline-block", width: '57%', height: '100%', float: "right" }}>
          {toolsToRender}
      </div>
    </div>
  );
}


export default GeneralScreen;