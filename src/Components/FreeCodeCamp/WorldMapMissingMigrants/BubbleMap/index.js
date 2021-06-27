import React, { useMemo } from 'react';

import * as d3 from 'd3';
import { Marks } from './Marks';



const maxRadius = 15;
const sizeValue = d => d['Total Dead and Missing']
export const BubbleMap = ({ data, filteredData, worldAtlas }) => {


  const sizeScale = useMemo(() => {
   
    return d3.scaleSqrt()
      .domain([0, d3.max(data, sizeValue)])
      .range([0, maxRadius])
  }
    , [data, sizeValue, maxRadius])


  return <Marks
    sizeScale={sizeScale}
    sizeValue={sizeValue}
    worldAtlas={worldAtlas}
    data={filteredData}
  />

}