import React, { useEffect, useState } from 'react';
import './Chart.scss';
import * as d3 from 'd3';
import ScatterPlot from './Components/FreeCodeCamp/ScatterPlot/ScatterPlot';
import BarChart from './Components/FreeCodeCamp/BarChart/BarChart';
import LineChart from './Components/FreeCodeCamp/LineChart/LineChart';
import WorldMap from './Components/FreeCodeCamp/WorldMap/WorldMap';
import BarChartLabourForce from './Components/Charts/BarChartLabourForce/BarChartLabourForce';
import ScatterPlotCountry from './Components/Charts/ScatterPlot/ScatterPlotCountry';
import { useDataScatter } from './Components/Charts/ScatterPlot/use-data-scatter';






function App() {


  const dataScatter = useDataScatter()

  if (!dataScatter) {
    return <pre>Loading...</pre>;
  }

  return (
    <div className="App" >
      {/* <WorldMap />
      <LineChart /> */}
      <ScatterPlotCountry data={dataScatter} />
      {/* <ScatterPlot />
      <BarChart />
      <BarChartLabourForce/> */}
      

    </div>
  );
}

export default App;
