import React, { useEffect, useState } from 'react';
import './Chart.scss';
import * as d3 from 'd3';
import ScatterPlot from './Components/FreeCodeCamp/ScatterPlot/ScatterPlot';
import BarChart from './Components/FreeCodeCamp/BarChart/BarChart';
import LineChart from './Components/FreeCodeCamp/LineChart/LineChart';





function App() {

  return (
    <div>

      <LineChart />
      <ScatterPlot />
      <BarChart />
    </div>
  );
}

export default App;
