import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

export const useData = (selectedValue) => {
  const [data, setData] = useState(null);
 
  let slice = +selectedValue
  useEffect(() => {
    const row = d => {
      d.Population = +d['2020'] * 1000;
      return d;
    };
    csv(csvUrl, row).then(data => {
      console.log(slice);
      setData(data.slice(0, slice))

    });
    return () => {
      setData(null)
    }
  }, [selectedValue]);

  return data;
};