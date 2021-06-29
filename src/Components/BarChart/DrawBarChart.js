import { Paper } from '@material-ui/core';
import * as d3 from 'd3';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import useBarChartAnimation from '../Animation/useBarChartAnimation';
import { Dropdown } from '../Charts/BarChartLabourForce/Dropdown';

import Tooltip from '../Util/Common/Tooltip';

import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

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


function DrawBarChart({ data, size, selectedValue, setSelectedValue }) {
    const tooltip_format = d3.format(',');
    const formatTooltip = tickValue => tooltip_format(tickValue)

    const [mousePosition, setMousePosition] = useState(null);
    const [hoveredValue, setHoveredValue] = useState(null);
    const attributes = [
        { value: 5, label: 'Sepal Length' },
        { value: 10, label: 'Sepal Width' },
        { value: 15, label: 'Petal Length' },
        { value: 20, label: 'Petal Width' },
        { value: 25, label: 'Species' }
    ];
    const handleMouseMove = useCallback(event => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
    }, [setMousePosition]);

    const yScale = d3.scaleBand()
        .domain(data.map(d => d.Country))
        .range([0, innerHeight])
        .paddingInner(0.15);
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Population)])
        .range([0, innerWidth]);

    const handleHover = (d) => {
        setHoveredValue(d)
    }
    return (
        <Paper elevation={3} className="svg-container" >
            <svg
                width={`${size.width < 1200 ? 100 : 80}%`} height={`${size.width < 1200 ? 100 : 80}%`}
                viewBox={`0 0 ${width} ${height}`}

            >
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
                        setHoveredValue={handleHover}
                        setMousePosition={handleMouseMove}
                        data={data}
                        xScale={xScale}
                        yScale={yScale}
                        xValue={xValue}
                        yValue={yValue}
                        tooltipFormat={xAxisTickFormat}
                    />
                </g>
            </svg>
            <Dropdown
                options={attributes}
                id="number"
                selectedValue={selectedValue}
                onSelectedValueChange={setSelectedValue}

            />
            <Tooltip
                hoveredValue={hoveredValue}
                mousePosition={mousePosition}
                yScale={yScale}
                yValue={yValue}
                formatTooltip={formatTooltip}
            />
        </Paper>
    );
}

export default DrawBarChart;
