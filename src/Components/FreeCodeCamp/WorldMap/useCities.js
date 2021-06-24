import React, { useState, useEffect } from 'react';
import { csv } from 'd3';
import { feature, mesh } from 'topojson'

const csvUrl =
  'https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv';

export const useCities = () => {
  const [data, setData] = useState(null);



  const row = (d) => {

    d.lat = +d.lat
    d.lng = +d.lng
    d.population = +d.population
    return d
  }

  useEffect(() => {
    csv(csvUrl, row).then(setData)
  }, []);



  return data;
};