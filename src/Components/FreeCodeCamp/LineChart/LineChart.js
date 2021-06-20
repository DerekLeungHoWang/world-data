import React, { useEffect, useState } from 'react';
import './LineChart.scss';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';
 
import * as d3 from 'd3';
import { useData } from './useData';

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;
const xValue = d => d.timestamp;
const xAxisLabel = "Time"
const yValue = d => d.temperature;
const yAxisLabel = "Temperature"

const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;
 
const xAxisTickFormat =  d3.timeFormat('%a');

function LineChart() {

  const data = useData()

  if (!data) {
    return <pre>Loading...</pre>;
  }
  const xScale = d3.scaleTime()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  // .domain([d3.min(data, yValue), d3.max(data, xValue)])
  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([innerHeight,0])
    .nice()

 
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={5}
        />
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={7} />
        <text
          className="axis-label"

          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${innerHeight / 2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
          circleRadius={3}
        />
      </g>
    </svg>
  );
}

export default LineChart;
