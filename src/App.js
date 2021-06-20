import React, { useEffect, useState } from 'react';
import './Chart.scss';
import * as d3 from 'd3';
import ScatterPlot from './Components/FreeCodeCamp/ScatterPlot/ScatterPlot';
import BarChart from './Components/FreeCodeCamp/BarChart/BarChart';





function App() {

  return (
    <div>
      <BarChart />
      <ScatterPlot />
    </div>
  );
}

export default App;
