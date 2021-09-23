import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/HoWangLeung/049e8d340d0b269c5f00ba1675656c29/raw/57fd4aba9651cdca787cb7bd39b90a348788414e/gdp_population_2017';

export const useDataScatter = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      d['GDP_PER_CAPITA'] = +d['GDP_PER_CAPITA']
      d.Population = +d.Population

      return d;
    };
    csv(csvUrl, row).then(d => {
      
      setData(d)
    })
  }, []);

  return data;
};