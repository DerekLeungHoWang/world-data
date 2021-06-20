import React, { useEffect, useState } from 'react';
import './Chart.scss';
import BarChart from './Components/BarChart/BarChart';
import { drawChart } from './Components/Charts/BasicD3';
import * as d3 from 'd3';
import { useData } from './Components/BarChart/useData';
import { AxisBottom } from './Components/FreeCodeCamp/BarChart/AxisBottom';
import { AxisLeft } from './Components/FreeCodeCamp/BarChart/AxisLeft';
import { Marks } from './Components/FreeCodeCamp/BarChart/Marks';




const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 220 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;
const yValue = d => d.Country;
const xValue = d => d.Population;
const xAxisLabelOffset = 50;
const siFormat = d3.format('.2s');
const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

function App() {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.Country))
    .range([0, innerHeight])
    .paddingInner(0.15);
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Population)])
    .range([0, innerWidth]);

  console.log(yScale.domain());
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} />
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          Population
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  );
}

export default App;
