
import React, { useEffect, useState, useMemo } from 'react';

import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3';


const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();


export const Marks = ({
  worldAtlas: { land, interiors },
  data,
  sizeScale,
  sizeValue
}) => {

  return (
    <g className="worldMap_marks">
      {useMemo(() => {
        return <><path className="sphere" d={path({ type: 'Sphere' })} />
          <path className="graticules" d={path(graticule())} />
          {land.features.map(feature => {
            return <path key={feature} className="land" d={path(feature)} />
          })}</>

      }, [path,graticule, land,interiors])}

      {data.map((d, i) => {

        const [x, y] = projection(d.coords);

        return <circle key={i} cx={x} cy={y} r={sizeScale(sizeValue(d))} />
      })}
      <path className="interiors" d={path(interiors)} />

    </g>





  )

}

