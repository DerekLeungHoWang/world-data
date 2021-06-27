
import React, { useEffect, useState } from 'react';

import * as d3 from 'd3';


export const Marks = ({
  binnedData,
  xScale,
  yScale,
  innerHeight,
  tooltipFormat,
  // circleRadius
}) => {

  return (
    <g className="lineChart_marks">
      {/* <path
        fill="none"
        stroke="black"
        d={d3.line()
          .x(d => xScale(xValue(d)))
          .y(d => yScale(yValue(d)))
          .curve(d3.curveNatural)
          (data)
        } /> */}
      {binnedData.map((d, i) => {

        

        return (
          <rect
            key={i}

            x={xScale(d.x0)}
            y={yScale(d.y)}
            width={xScale(d.x1) - xScale(d.x0)}
            height={innerHeight - yScale(d.y)}
          >
            <title>{d.y}</title>
          </rect>
        )

      })}
    </g>





  )

}

