
import React, { useEffect, useState } from 'react';
 
import * as d3 from 'd3';


export const Marks = ({
    data,
    xScale,
    yScale,
    xValue,
    yValue,
    tooltipFormat,
    circleRadius
  }) =>
    data.map(d => (
      <circle
        className="mark"
      
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={circleRadius}
      >
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    ));
  