import React, { useEffect, useState } from 'react';
import './WorldMap.scss';
import { Marks } from './Marks';

import * as d3 from 'd3';
import { useData } from './useData';

const width = 960;
const height = 500;

function WorldMap() {

  const data = useData()

  if (!data) {
    return <pre>Loading...</pre>;
  }



  return (
    <svg width={width} height={height}>
      <Marks
        data={data}
      />

    </svg>
  );
}

export default WorldMap;
