import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

export const XAxis = ({xScale, innerHeight}) => {

  const ref = useRef();
  useEffect(() => {
    const xAxisG = d3.select(ref.current)
    const xAxis = d3.axisBottom(xScale)
      .tickSize(-innerHeight)
      .tickPadding(10)
    xAxisG.call(xAxis)
  }, [xScale, innerHeight])

  return <g id="XAxis" transform={`translate(0,${innerHeight})`} ref={ref}/>
}
