import React, { useEffect, useState } from 'react';
import './Chart.scss';
import * as d3 from 'd3';
import ScatterPlot from './Components/FreeCodeCamp/ScatterPlot/ScatterPlot';
import BarChart from './Components/FreeCodeCamp/BarChart/BarChart';
import LineChart from './Components/FreeCodeCamp/LineChart/LineChart';
import WorldMap from './Components/FreeCodeCamp/WorldMap/WorldMap';





function App() {

  return (
    <div>
      {/* <WorldMap />
      <LineChart /> */}
      <ScatterPlot />
      {/* <BarChart /> */}
    </div>
  );
}

export default App;
