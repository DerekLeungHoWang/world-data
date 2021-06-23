
import React, { useEffect, useState } from 'react';

import * as d3 from 'd3';


export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  colorScale,
  colorValue,
  tooltipFormat,
  circleRadius,
 
}) =>{

 
  return   data.map((d, i) => (
    <circle
      key={i}
      className="scatterMarks"
      style={{
          transition: `all .7s ${i*Math.floor(Math.random() * 5)}ms ease-in-out `,
          
      }}
      fill={colorScale(colorValue(d))}
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={circleRadius}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ))
}

  
  ;
