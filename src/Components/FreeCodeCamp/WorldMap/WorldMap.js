import React, { useEffect, useState } from 'react';
import './WorldMap.scss';
import { Marks } from './Marks';

import * as d3 from 'd3';
import { useWorldAtlas } from './useData';
import { useCities } from './useCities';

const width = 960;
const height = 500;

function WorldMap() {

  const worldAtlas = useWorldAtlas()
  const cities = useCities()



  if (!worldAtlas || !cities) {
    return <pre>Loading...</pre>;
  }
  const maxRadius = 15;
  const sizeValue = d => d.population
  const sizeScale = d3.scaleSqrt()
    .domain([0, d3.max(cities, sizeValue)])
    .range([0, maxRadius])

    console.log(d3.max(cities, sizeValue));
    console.log(sizeValue(cities[0]));

  return (
    <svg width={width} height={height}>
      <Marks
        sizeScale={sizeScale}
        sizeValue={sizeValue}
        worldAtlas={worldAtlas}
        cities={cities}
      />

    </svg>
  );
}

export default WorldMap;
