import React from "react";

import MapCard from './MapCard'
import Tools from './Tools'

const GeneralScreen = props => {
  let isObjectToAdd = false
  if (props.objectToAdd !== ""){
    isObjectToAdd = true
  }
  const divStyle = {
      width: '100%',
      height: '87%',
      paddingTop: "20px",
      paddingLeft: '2%',
      paddingRight: '2%'
  };
  return (
    <div style={divStyle}>
        <div style={{display: "inline-block", height: "100%", width: "51%", float: "left"}}>
          <MapCard 
            mapClickableOnClick={props.mapClickableOnClick} 
            mapLabels={props.map.labels}
            isObjectToAdd={isObjectToAdd}/>
        </div>
        <div style={{display: "inline-block", width: '47%', height: '100%', float: "right" }}>
          <Tools 
            startStopSimulation={props.startStopSimulation} 
            addObject={props.addObject}
            started={props.started}
          />
      </div>
    </div>
  );
}


export default GeneralScreen;