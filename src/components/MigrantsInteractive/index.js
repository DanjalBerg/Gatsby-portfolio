import React, { useState } from 'react';

//components
import { Wrapper, Content } from './MigrantsInteractive.styles'
import { useWorldAtlas } from './useWorldAtlas';
import { useData } from './useData'
import { BubbleMap } from './BubbleMap/'
import { DateHist } from './DateHist/';
// mapshaper.org

const width = 960;
const height = 500;
const dateHistogramSize = 0.2
const xValue = d => d['Reported Date']

const MigrantsInteractive = () => {
  const worldAtlas = useWorldAtlas();
  const data = useData();
  const [brushExtent, setBrushExtent] = useState(null);

  //console.log(brushExtent)
  if(!worldAtlas || !data) {
    return (<div>Loading...</div>)
  }
  //console.log(data[0])


  const filteredData = brushExtent ? data.filter(d => {
    const date = xValue(d);
    //console.log(brushExtent[0])
    return(
      (date > brushExtent[0]) && (date < brushExtent[1])
    );
  }) : data;

  return(
    <Wrapper>
      <Content>
        <svg width={width} height={height}>
          <BubbleMap
            data={data}
            filteredData={filteredData}
            worldAtlas={worldAtlas}
          />
          <g transform={`translate(0,${height - dateHistogramSize * height})`}>
            <DateHist
              data={data}
              height={dateHistogramSize * height}
              width={width}
              setBrushExtent={setBrushExtent}
              xValue={xValue}/>
          </g>

        </svg>
      </Content>
    </Wrapper>
  )
}

export default MigrantsInteractive;
