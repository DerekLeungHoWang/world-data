
import React, { useEffect, useRef, useState } from 'react';

import * as d3 from 'd3';
import gsap from 'gsap'

export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  selectedValue,
  setHoveredValue
}) => {

  const marks = useRef([])
  marks.current = [];
  const addTomarks = el => {

    if (el && !marks.current.includes(el)) {

      marks.current.push(el);
    }
  };
  useEffect(() => {


    gsap.from(marks.current, {
      duration: 1,
      stagger: 0.1,
      width: 0,
      ease: "Power3.easeInOut"
    });
    return () => {

    }

  }, [selectedValue])


  return data.map(d => {
  

    return (
      <rect
        ref={addTomarks}
        className="mark"
        key={yValue(d)}
        x={0}
        y={yScale(yValue(d))}
        width={xScale(xValue(d))}
        height={yScale.bandwidth()}
        onMouseOver={(e) => {
          setHoveredValue(d3.pointer(e))
        }}
      >

      </rect>
    )
  }

  );

}

