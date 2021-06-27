
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
  onHover
}) => {


  return data.map((d, i) => {

      let r =  d.GDP_PER_CAPITA/10000
    
    return (
      <circle
        key={i}
        className="scatterMarks"
        style={{
          transition: `all .7s ${i * Math.floor(Math.random() * 5)}ms ease-in-out `,

        }}
        fill={colorScale(colorValue(d))}
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={ 7+ r*1.1 }
        onMouseOver={()=>onHover(d)}
      >
        {/* <title>{tooltipFormat(xValue(d))}</title> */}
      </circle>
    )
  })
}


  ;
