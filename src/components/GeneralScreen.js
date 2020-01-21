import React from "react";

import MapCard from './MapCard'
import Tools from './Tools'

const GeneralScreen = props => {
  if(props.screen === "Individual" && !props.started){
    return(
      <div>
        First configure the map please!
      </div>
    );
  }
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
                      selectedCar={props.selectedCar}/>
  if(props.screen === "Individual"){
    toolsToRender = <div></div>
  }
  return (
    <div style={divStyle}>
        <div style={{display: "inline-block", height: "100%", width: "51%", float: "left"}}>
          {mapToRender}
        </div>
        <div style={{display: "inline-block", width: '47%', height: '100%', float: "right" }}>
          {toolsToRender}
      </div>
    </div>
  );
}


export default GeneralScreen;