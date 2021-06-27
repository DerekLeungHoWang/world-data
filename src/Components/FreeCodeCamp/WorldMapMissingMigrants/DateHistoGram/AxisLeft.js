import React, { useEffect, useState } from 'react';
 
import * as d3 from 'd3';
export const AxisLeft = ({ yScale,innerWidth,tickOffset=3 }) =>
  yScale.ticks().map(tickValue => (
    <g key={tickValue}  className="tick" transform={`translate(0,${yScale(tickValue)})`} >
      <line x2={innerWidth}/>
      <text
        key={tickValue}
        style={{ textAnchor: 'end' }}
        x={-tickOffset}
        dy=".32em"
        
      >
        {tickValue}
      </text>
    </g>
  ));
