import React, { useEffect, useState } from 'react';
import './BarChart.scss';
import { AxisBottom } from './AxisBottom.js'
import { AxisLeft } from './AxisLeft.js'
import { Marks } from './Marks.js'
import { useData } from './useData.js'
import * as d3 from 'd3';
import { Dropdown } from './Dropdown';
import ToolBarSpace from '../../Drawer/ToolBarSpace';


const attributes = [
    { value: 5, label: 'Sepal Length' },
    { value: 10, label: 'Sepal Width' },
    { value: 15, label: 'Petal Length' },
    { value: 20, label: 'Petal Width' },
    { value: 25, label: 'Species' }
];




const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 220 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;
const yValue = d => d.Country;
const xValue = d => d.Population;
const xAxisLabelOffset = 50;
const siFormat = d3.format('.0s');
const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

function BarChartLabourForce() {
    const initialSelectedValue = 5;
    const [selectedValue, setSelectedValue] = useState(initialSelectedValue);
    const data = useData(selectedValue);

    if (!data) {
        return <pre> </pre>;
    }


    const yScale = d3.scaleBand()
        .domain(data.map(d => d.Country))
        .range([0, innerHeight])
        .paddingInner(0.15);
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Population)])
        .range([0, innerWidth])
        .nice()


    return (
        <div>
            <ToolBarSpace />
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
                        Labour Force
                    </text>
                    <Marks

                        data={data}
                        xScale={xScale}
                        yScale={yScale}
                        xValue={xValue}
                        yValue={yValue}
                        tooltipFormat={xAxisTickFormat}
                        selectedValue={selectedValue}
                    />
                </g>
            </svg>
            <label htmlFor="y-select">Number of Rows:</label>
            <Dropdown
                options={attributes}
                id="number"
                selectedValue={selectedValue}
                onSelectedValueChange={setSelectedValue}
            />
        </div>
    );
}

export default BarChartLabourForce;
