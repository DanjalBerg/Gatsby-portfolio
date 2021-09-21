import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

export const YAxis = ({yScale, innerWidth}) => {

  const ref = useRef();
  useEffect(() => {
    const yAxisG = d3.select(ref.current)
    const yAxis = d3.axisLeft(yScale)
      .tickSize(-innerWidth)
      .tickPadding(10)
    yAxisG.call(yAxis)
  }, [yScale, innerWidth])

  return <g id="YAxis"  ref={ref}/>
}

//transform={`translate(0,${innerWidth})`}
