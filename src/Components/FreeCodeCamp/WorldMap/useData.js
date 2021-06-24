import React, { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature, mesh } from 'topojson'

const jsonUrl =
  'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

export const useWorldAtlas = () => {
  const [data, setData] = useState(null);

  

  useEffect(() => {
    json(jsonUrl).then(data => {
      setData({
        land: feature(data, data.objects.land),
        interiors: mesh(data, data.objects.countries, (a, b) => a !== b)
      })
    })
  }, []);

  return data;
};