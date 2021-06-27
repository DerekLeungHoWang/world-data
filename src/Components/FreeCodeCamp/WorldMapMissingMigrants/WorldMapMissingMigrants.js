import React, { useEffect, useState } from 'react';
import './WorldMap.scss';
import { Marks } from './BubbleMap/Marks';

import * as d3 from 'd3';
import { useWorldAtlas } from './useWorldAtlas';
import { useData } from './useData';
 
import DateHistorgram from './DateHistoGram/DateHistogram';
import { BubbleMap } from './BubbleMap';



const width = 960;
const height = 500;
const dateHistoGramSize = 0.2

function WorldMapMissingMigrants() {

  const worldAtlas = useWorldAtlas()
  const data = useData()



  if (!worldAtlas || !data) {
    return <pre>Loading...</pre>;
  }




  return (
    <svg className="missingMigrants" width={width} height={height}>
      <BubbleMap worldAtlas={worldAtlas} data={data} />
      <g transform={`translate(0,${height - height * dateHistoGramSize})`}>
        <DateHistorgram data={data} width={width} height={height * dateHistoGramSize} />
      </g>
    </svg>
  );
}

export default WorldMapMissingMigrants;
