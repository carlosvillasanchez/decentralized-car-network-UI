import React from "react";
import MapCard from './MapCard'

const IndividualScreen = props => {
  if(props.started){
      return(
        <div>
            ON PROGRESS
        </div>
      );
  }else{
      return(
        <div>
            First configure the map and start simualtion.
        </div>
      );
  }
}


export default IndividualScreen;