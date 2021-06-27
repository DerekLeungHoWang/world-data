
import React, { useEffect, useState } from 'react';

import * as d3 from 'd3';

export const AxisBottom = ({ xScale, innerHeight, tickFormat, tickOffset = 3 }) =>
  xScale.ticks().map(tickValue => {

    return (
      <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
        <line y2={innerHeight} />
        <text style={{ textAnchor: 'middle' }} dy=".71em" y={innerHeight + tickOffset}>
          {tickFormat(tickValue)}
        </text>
      </g>
    )
  })