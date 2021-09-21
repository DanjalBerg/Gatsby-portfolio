import React, { useRef, useEffect, useMemo } from 'react';
import * as d3 from 'd3';

//components
import { AxisBottom } from './AxisBottom'
import { AxisLeft } from './AxisLeft'
import { Marks } from './Marks'

//const width = 960;
//const height = 150;
const margin = {top: 0, bottom: 20, left: 50, right: 50}
const xLabelOffset = 20
const yLabelOffset = 30

const xAxisTickFormat = d3.timeFormat('%d/%m/%Y')
const yValue = d => d['Total Dead and Missing']

const xAxisLabel ="Time"
const yAxisLabel ="Total Dead and Missing"

export const DateHist = ({data, height, width, setBrushExtent, xValue}) => {

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xScale = useMemo(() => d3.scaleTime()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice()
  , [data, xValue, innerWidth])

  const binnedData = useMemo(() => {
    const [start, stop] = xScale.domain();

    return(
      d3.bin()
      .value(xValue)
      .domain(xScale.domain())
      .thresholds(d3.timeMonths(start, stop))(data)
      .map(array => ({
        y: d3.sum(array, yValue),
        x0: array.x0,
        x1: array.x1
      }))
    )
  }, [xValue, xScale, data])


    const yScale = useMemo(() => d3.scaleLinear()
      .domain([0, d3.max(binnedData, d => d.y)])
      .range([innerHeight, 0])
      .nice()
    , [binnedData, innerHeight]);



  const brushRef = useRef();
  useEffect(() => {
    const brush = d3.brushX().extent([[0,0],[innerWidth,innerHeight]])
    brush(d3.select(brushRef.current));
    brush.on('brush end', (event) => {
      setBrushExtent(
        event.selection && event.selection.map(xScale.invert)
      )
    })
  }, [innerWidth, innerHeight, setBrushExtent, xScale])

  return (
    <>
      <rect width={width} height={height} fill="white"/>
      <g transform={`translate(${margin.left},${margin.top})`}>

        <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={xAxisTickFormat}/>
        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${0-yLabelOffset},${innerHeight/2}) rotate(-90)`}
          >
          {yAxisLabel}
        </text>

        <AxisLeft yScale={yScale} innerWidth={innerWidth}/>
        <text className="axis-label"
          x={innerWidth/2} textAnchor="middle" y={innerHeight+xLabelOffset}>
          {xAxisLabel}
        </text>

        <Marks binnedData={binnedData} xScale={xScale} yScale={yScale}
          tooltipFormat={d => d} innerHeight={innerHeight}/>

        <g ref={brushRef}/>
      </g>
    </>
  )
}
