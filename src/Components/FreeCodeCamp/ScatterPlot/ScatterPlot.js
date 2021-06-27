import React, { useEffect, useState } from 'react';
import './BarChart.scss';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

import * as d3 from 'd3';
import { useDataScatter } from './use-data-scatter';
import { Dropdown } from './Dropdown';
import { scaleOrdinal } from 'd3';
import ColorLegend from './ColorLegend';
const attributes = [
  { value: 'sepal_length', label: 'Sepal Length' },
  { value: 'sepal_width', label: 'Sepal Width' },
  { value: 'petal_length', label: 'Petal Length' },
  { value: 'petal_width', label: 'Petal Width' },
  { value: 'species', label: 'Species' }
];
const getLabel = value => {
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].value === value) {
      return attributes[i].label;
    }
  }
};

const menuHeight = 75;
const width = 960;
const height = 500 - menuHeight;
const margin = { top: 20, right: 20, bottom: 5, left: 90 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const circleRadius = 6



const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;
const siFormat = d3.format('.2s');
const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');



function ScatterPlot() {

  const data = useDataScatter()

  const [hoveredValue, setHoveredValue] = useState(null)

  const initialXAttribute = "petal_length"
  const [xAttribute, setXAttribute] = useState(initialXAttribute)
  const xValue = d => d[xAttribute];
  const xAxisLabel = getLabel(xAttribute)


  const initialYAttribute = 'sepal_width';
  const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const yValue = d => d[yAttribute];
  const yAxisLabel = getLabel(yAttribute)

  const colorLegendLabel = "Species"

  if (!data) {
    return <pre>Loading...</pre>;
  }
  const colorValue = d => d.species;
  const filteredData = data.filter(d => hoveredValue === colorValue(d))

  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  // .domain([d3.min(data, yValue), d3.max(data, xValue)])
  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([0, innerHeight])
    .nice()

    
  const colorScale = d3.scaleOrdinal()
    .domain(data.map(colorValue))
    .range(['#E6842A', '#137B80', '#8E6C8A']);

  return (
    <>


      <svg width={width} height={height}   viewBox="0 0 960 500">
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
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
          >
            {xAxisLabel}
          </text>
          <text
            className="axis-label"

            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset},${innerHeight / 2}) rotate(-90)`}
          >
            {yAxisLabel}
          </text>


          <g transform={`translate(${innerWidth + 50})`}>
            <text
              x={35}
              y={30}
              className="axis-label"

              textAnchor="middle"
            >
              {colorLegendLabel}
            </text>
            <ColorLegend tickSpacing={22}
              tickTextOffset={12}
              tickSize={circleRadius}
              colorScale={colorScale}
              onHover={setHoveredValue}
              hoveredValue={hoveredValue}
            />
          </g>
          <g  opacity={hoveredValue?.2:1}>
            <Marks
              data={data}

              xScale={xScale}
              yScale={yScale}
              xValue={xValue}
              yValue={yValue}
              colorScale={colorScale}
              colorValue={colorValue}
              tooltipFormat={xAxisTickFormat}
              circleRadius={circleRadius}
            />
          </g>
          <Marks
            data={filteredData}

            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            colorScale={colorScale}
            colorValue={colorValue}
            tooltipFormat={xAxisTickFormat}
            circleRadius={circleRadius}
          />
        </g>
      </svg>

      <label for="x-select" >X:</label>
      <Dropdown
        options={attributes}
        id="x-select"
        selectedValue={xAttribute}
        onSelectedValueChange={setXAttribute}
      />
      <label for="y-select">Y:</label>
      <Dropdown
        options={attributes}
        id="y-select"
        selectedValue={yAttribute}
        onSelectedValueChange={setYAttribute}
      />
    </>
  );
}

export default ScatterPlot;
