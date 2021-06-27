import React from 'react';

import * as d3 from 'd3';
import { Marks } from './Marks';
 



export const BubbleMap = ({data, worldAtlas}) => {
    const maxRadius = 15;
    const sizeValue = d => d['Total Dead and Missing']
    const sizeScale = d3.scaleSqrt()
      .domain([0, d3.max(data, sizeValue)])
      .range([0, maxRadius])
      ;

    return <Marks
      sizeScale={sizeScale}
      sizeValue={sizeValue}
      worldAtlas={worldAtlas}
      data={data}
    />

  }