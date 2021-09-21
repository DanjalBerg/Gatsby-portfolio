import React from 'react';
//import * as d3 from 'd3';

export const AxisBottom = ({xScale, innerHeight, tickFormat, tickOffset =3}) =>
  xScale.ticks().map((tickValue) => (
    <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
      <line
        x1={0}
        y1={0}
        x2={0}
        y2={innerHeight}
      />
      <text
        y={innerHeight + tickOffset}
        dy=".71em"
        style={{textAnchor: 'middle'}}
        >
        {tickFormat(tickValue)}
      </text>
    </g>
  ));
