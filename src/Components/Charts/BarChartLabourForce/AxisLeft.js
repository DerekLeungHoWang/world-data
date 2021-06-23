import React, { useEffect, useState } from 'react';

import * as d3 from 'd3';
import gsap from 'gsap'
import { useRef } from 'react';
export const AxisLeft = ({ yScale }) => {

  


  return yScale.domain().map(tickValue => (
    <g key={tickValue} className="tick clipPath">


      <text

        key={tickValue}
        style={{ textAnchor: 'end' }}
        x={-3}
        dy=".32em"
        y={yScale(tickValue) + yScale.bandwidth() / 2}
      >
        {tickValue}
      </text>
    
    </g>
  ));
}

