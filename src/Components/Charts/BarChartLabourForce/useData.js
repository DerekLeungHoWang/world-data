import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/HoWangLeung/241f6cfcc5084461df00919bce29dff4/raw/52e29805cb991a3ab01c0048a2f21571c661bdb6/labourForce.csv';

export const useData = (selectedValue) => {
  const [data, setData] = useState(null);
  let slice = +selectedValue
  useEffect(() => {

    const row = d => {
      d.Population = +d['2020'];
      return d;
    };
    csv(csvUrl, row).then(data => {

      setData(data.slice(0, slice));
    });
    return () => {
      setData(null)
    }
  }, [slice]);

  return data;
};