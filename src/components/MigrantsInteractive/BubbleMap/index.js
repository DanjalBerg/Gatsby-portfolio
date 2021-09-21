import React, {useMemo} from 'react';
import * as d3 from 'd3';

//components
import { Marks } from './Marks'

//constants
const maxRadius = 15;
const sizeValue = d => d['Total Dead and Missing'];

export const BubbleMap = ({data, filteredData, worldAtlas}) => {

  const sizeScale = useMemo(() => d3.scaleSqrt()
    .domain([0, d3.max(data, sizeValue)])
    .range([0, maxRadius])
  , [data]);

  return(
      <Marks
      worldAtlas={worldAtlas} data={filteredData}
      sizeScale={sizeScale} sizeValue={sizeValue}
      />
  );
}
