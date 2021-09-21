import React from 'react';
//import * as d3 from 'd3';

import { Wrapper, Content } from './CovidByCountry.styles'
import { useData } from './useData';
import { LineChart } from './LineChart'

const width = window.innerWidth
const height = Math.min(window.innerHeight, 500);
//const margin = {top: 20, bottom: 60, left: 100, right: 30}
//const xLabelOffset = 50
//const yLabelOffset = 40

//const commaFormatter = d3.format(',')


const CovidByCountry = () => {
  const data = useData();

  if(!data) {
    return (<div>Loading...</div>)
  }

  return(
    <Wrapper>
      <Content>
        <LineChart data={data} width={width} height={height}/>
      </Content>
    </Wrapper>
  )
}

export default CovidByCountry;
