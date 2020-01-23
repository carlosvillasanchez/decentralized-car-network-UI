
import SimulationConstants from '../constants/simulationConstants';

function createEmptyMap(){
    var xRange = SimulationConstants.XCells*SimulationConstants.XAreas;
    var yRange = SimulationConstants.YCells*SimulationConstants.YAreas;
    var to_return = [];
    for(var i=0; i<yRange; i++){
      to_return.push(new Array(xRange))
    }
    console.log(to_return)
    return to_return;
  }

export {createEmptyMap} 