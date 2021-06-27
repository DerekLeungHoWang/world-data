import React from 'react'
import LineChart from '../../LineChart/LineChart'
import * as d3 from 'd3'
import { Marks } from './Marks';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';




const margin = { top: 0, right: 30, bottom: 20, left: 45 };
const xAxisLabelOffset = 54;
const yAxisLabelOffset = 30;

export default function DateHistorgram({ data, width, height }) {


  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  const xValue = d => d['Reported Date']
  const yValue = d => d['Total Dead and Missing']

  const xAxisLabel = "Time"
  const yAxisLabel = "Total Dead and Missing"

  const xAxisTickFormat = d3.timeFormat('%m/%d/%Y');




  const xScale = d3.scaleTime()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  // .domain([d3.min(data, yValue), d3.max(data, xValue)])

  const [start, stop] = xScale.domain()

  const binnedData = d3.bin()
    .value(xValue)
    .domain(xScale.domain())
    .thresholds(d3.timeMonths(start, stop))(data)
    .map(array => {
      return ({
        y: d3.sum(array, yValue),
        x0: array.x0,
        x1: array.x1
      })
    })


  const yScale = d3.scaleLinear()
    .domain([0, d3.max(binnedData, d => d.y)])
    .range([innerHeight, 0])
    .nice()


  return (
    <>
      <rect width={width} height={height} fill="white" />
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
          binnedData={binnedData}
          xScale={xScale}
          yScale={yScale}
          innerHeight={innerHeight}
          // tooltipFormat={xAxisTickFormat}
          circleRadius={2}
        />
      </g>
    </>

  );
}
