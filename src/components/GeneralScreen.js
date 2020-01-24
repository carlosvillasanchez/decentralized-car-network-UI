import React, { useState } from "react";

import MapCard from './MapCard';
import Tools from './Tools';
import Messages from './Messages';
import ReactInterval from 'react-interval';

const GeneralScreen = props => {
  let [renderer, setRenderer] = useState([...Array(100).keys()]);
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
                      selectedCar={props.selectedCar}
                      prueba={props.prueba}/>
  if(props.screen === "Individual"){
    toolsToRender = <Messages renderer={renderer}/>
        
  }
  return (
    <div style={divStyle}>
      <ReactInterval 
        timeout={2000} 
        enabled={props.screen === "Individual"}
        callback={() => setRenderer(r => ["e", ...r]) }
      />  
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