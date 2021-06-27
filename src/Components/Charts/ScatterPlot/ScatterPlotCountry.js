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
import { useRef } from 'react';
import ToolBarSpace from '../../Drawer/ToolBarSpace';
const attributes = [
  { value: 'GDP_PER_CAPITA', label: 'GDP Per Capita' },
  { value: 'Population', label: 'Population' },

];
const getLabel = value => {
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].value === value) {
      return attributes[i].label;
    }
  }
};

const menuHeight = 75;
const width = 1090;
const height = 500 - menuHeight;
const margin = { top: 20, right: 280, bottom: 5, left: 100 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const circleRadius = 6



const xAxisLabelOffset = 50;
const yAxisLabelOffset = 75;
const siFormat = d3.format('.2s');
const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');



function ScatterPlotCountry({ data }) {

  const svgRef = useRef()
  const gRef = useRef()

  const [currentZoomState, setCurrentZoomState] = useState()
  const [hoveredValue, setHoveredValue] = useState(null)
  const [hoveredCountry, setHoveredCountry] = useState({})
  const initialXAttribute = "Population"
  const [xAttribute, setXAttribute] = useState(initialXAttribute)
  const xValue = d => d[xAttribute];
  const xAxisLabel = getLabel(xAttribute)


  const initialYAttribute = 'GDP_PER_CAPITA';
  const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const yValue = d => d[yAttribute];
  const yAxisLabel = getLabel(yAttribute)

  const colorLegendLabel = "Continents"


  const colorValue = d => d.Continent;
  const filteredData = data.filter(d => hoveredValue === colorValue(d))

  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice()
  if (currentZoomState) {
    const newXScale = currentZoomState.rescaleX(xScale)

    xScale.domain(newXScale.domain()).nice()
  }
  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([innerHeight, 0])
    .nice()


  const colorScale = d3.scaleOrdinal()
    .domain(data.map(colorValue))
    .range(['#ef476f', '#6930c3', '#4ea8de', '#6d6875', '#2a9d8f', '#B649AA']);


  useEffect(() => {

    const svg = d3.select(svgRef.current)



    const zoom = d3.zoom()
      .scaleExtent([1, 11155])

      .translateExtent([
        [0, 0],
        [innerWidth, innerHeight]
      ])
      .on("zoom", (e) => {

        const zoomState = d3.zoomTransform(svg.node())
        zoomState.x = 0



        setCurrentZoomState(zoomState)
      })




    svg.call(zoom, d3.zoomIdentity)


  }, [currentZoomState])

  const handleHover = (value) => {

    console.log(value);
    setHoveredCountry(value)
  }

  return (
    <div>

      <ToolBarSpace />
      <svg ref={svgRef} width={width} height={height}
        viewBox="0 0 960 500" overflow="hidden">
        <clipPath id="binoculars">

          <rect width={innerWidth} height={height} />
        </clipPath>
        <g

          transform={`translate(${margin.left},${margin.top})`}
        >

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


          <g transform={`translate(${innerWidth + 70})`}>
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


          <g clipPath="url(#binoculars)" opacity={hoveredValue ? .2 : 1}>
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
              onHover={handleHover}
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
            onHover={setHoveredCountry}
          />
        </g>

        <g transform={`translate(${innerWidth + 130},${innerHeight - 165})`}>

          <foreignObject x="20" y="0" width="300" height="160">
            {/* <div className="scatterplot_country_Tooltip" >
              <span>Country: {hoveredCountry.Country}</span>
              <span>  {hoveredCountry.Continent}</span>
              <span>  {hoveredCountry.GDP_GROWTH}</span>
              <span> {hoveredCountry.GDP_NOMINAL}</span>
              <span>{hoveredCountry.Population}</span>
              <span> {hoveredCountry.Share}</span>
            </div> */}
            <table className="scatterplot_country_Tooltip">


              <tbody  >
                <tr><th scope="row">Country: </th><td>{hoveredCountry.Country}</td></tr>
                <tr><th scope="row">Continent: </th><td>{hoveredCountry.Continent}</td></tr>
                <tr><th scope="row">GDP: </th><td>{hoveredCountry.GDP_GROWTH}</td></tr>
                <tr><th scope="row">GDP: </th><td>{hoveredCountry.GDP_NOMINAL}</td></tr>
                <tr><th scope="row">Population: </th><td>{hoveredCountry.Population}</td></tr>
                <tr><th scope="row">Share: </th><td>{hoveredCountry.Share}</td></tr>
              </tbody>

            </table>
          </foreignObject>


        </g >


      </svg >

      <label htmlFor="x-select" >X:</label>
      <Dropdown
        options={attributes}
        id="x-select"
        selectedValue={xAttribute}
        onSelectedValueChange={setXAttribute}
      />
      <label htmlFor="y-select">Y:</label>
      <Dropdown
        options={attributes}
        id="y-select"
        selectedValue={yAttribute}
        onSelectedValueChange={setYAttribute}
      />
    </div>
  );
}

export default ScatterPlotCountry;
