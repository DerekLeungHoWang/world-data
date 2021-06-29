
import React, { useEffect, useState, useRef } from 'react';

import * as d3 from 'd3';
import useBarChartAnimation from '../Animation/useBarChartAnimation';


export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  setMousePosition,
  setHoveredValue
}) => {
  const marks = useRef([])
  const addTomarks = useBarChartAnimation(marks)
  
  return data.map(d => (
    <rect
      ref={addTomarks}
      className="mark"
      key={yValue(d)}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
      onMouseMove={(e) => {
        setHoveredValue(xValue(d))
        setMousePosition(e)

      }}
      onMouseOut={(e) => {
        setHoveredValue(null)
      }}
    >
  
    </rect>
  ))
}




