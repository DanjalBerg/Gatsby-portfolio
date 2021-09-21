import React from 'react';
//import * as d3 from 'd3';

export const Marks = ({binnedData, xScale, yScale, tooltipFormat, innerHeight}) => (
  <g className="marks">
    {binnedData.map((d, i) => (
        <rect className="mark"
          key={i}
          x={xScale(d.x0)}
          y={yScale(d.y)}
          width={xScale(d.x1) - xScale(d.x0)}
          height={innerHeight - yScale(d.y)}
        >
          <title>{tooltipFormat(d.y)}</title>
        </rect>
      ))
    }
</g>
)
