
import React, { useEffect, useState } from 'react';

import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3';


const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();


export const Marks = ({
  worldAtlas: { land, interiors },
  cities,
  sizeScale,
  sizeValue
}) => {

  return (
    <g className="worldMap_marks">
      <path className="sphere" d={path({ type: 'Sphere' })} />
      <path className="graticules" d={path(graticule())} />
      {land.features.map(feature => {
        return <path key={feature} className="land" d={path(feature)} />
      })}
      {cities.map( (d,i) => {

        const [x, y] = projection([d.lng, d.lat]);
        
        return <circle key={i} cx={x} cy={y} r={sizeScale(sizeValue(d))} />
      })}
      <path className="interiors" d={path(interiors)} />

    </g>





  )

}

