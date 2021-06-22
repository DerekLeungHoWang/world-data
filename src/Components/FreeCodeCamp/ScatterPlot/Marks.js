
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
  circleRadius
}) =>
  data.map((d, i) => (
    <circle
      key={i}
      
      fill={colorScale(colorValue(d))}
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={circleRadius}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));
