import React, { useCallback, useState, useMemo } from 'react'
import * as d3 from 'd3';


//components
import {XMarkerLine} from './XMarkerLine'
//import {YMarkerLine} from './YMarkerLine'
import {XAxis} from './XAxis'
import {YAxis} from './YAxis'
import {VoronoiOverlay} from './VoronoiOverlay'

const xValue = d => d.date;
const yValue = d => d.deathsTotal

const margin = {top: 30, right: 80, bottom: 60, left: 160 };

const formatDate = d3.timeFormat('%b %d');
const formatComma = d3.format(',')

export const LineChart = ({ data, width, height }) => {

  const [activeRow, setActiveRow] = useState()

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;


  const allData = useMemo(() => data.reduce(
    (accumulator, countryTimeseries) =>
      accumulator.concat(countryTimeseries)
      ,[]),
  [data]);

  //console.log(allData)

  const xScale = useMemo (() => d3.scaleTime()
    .domain(d3.extent(allData, xValue))
    .range([0, innerWidth])
    //.nice()
    ,[allData, innerWidth]);

  const yScale = useMemo (() => d3.scaleLinear()
    .domain([0,d3.max(allData, yValue)])
    .range([innerHeight, 0])
    .nice()
    , [allData, innerHeight]);

  const lineGenerator = useMemo(() => d3.line()
    .x(d => xScale(xValue(d)))
    .y(d => yScale(yValue(d)))
    ,[xScale,yScale]);

  const mostResentDate = xScale.domain()[1]

  //console.log(activeRow)

  const handleVoronoiHover = useCallback(setActiveRow, [setActiveRow])

  return (
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {/*<YMarkerLine
            value={100000}
            innerWidth={innerWidth}
            yScale={yScale}/>*/}

          <XMarkerLine
            mostResentDate={mostResentDate}
            label={formatDate(mostResentDate)}
            innerHeight={innerHeight}
            xScale={xScale}/>

          <XAxis
            xScale={xScale}
            innerHeight={innerHeight}/>

          <YAxis
            yScale={yScale}
            innerWidth={innerWidth}/>

          {
            data.map((countryTimeseries, i) =>
              <path key={countryTimeseries.countryName} id="lines" d={lineGenerator(countryTimeseries)}/>
            )
          }

          {activeRow ? (
            <>
            <path
              id="Active-line"
              d={lineGenerator(
                data.find(countryTimeseries =>
                  countryTimeseries.countryName === activeRow.countryName
                )
              )}
            />
            <g
              transform={`translate(${lineGenerator.x()(activeRow)},${lineGenerator.y()(activeRow)})`}
              >
              <circle
                r={5}
                fill='red'
              />

              <text
                id="Tooltip-stroke"
                x={-10}
                y={-10}
              >
                {activeRow.countryName}:{formatComma(activeRow.deathsTotal)} deaths, {formatDate(activeRow.date)}
              </text>

              <text
                id="Tooltip"
                x={-10}
                y={-10}
              >
                {activeRow.countryName}:{formatComma(activeRow.deathsTotal)} deaths, {formatDate(activeRow.date)}
              </text>


            </g>
          </>
          ) : null
          }


          <text id="PlotTitle">Global Coronavirus Deaths</text>
          <text id="XLabel">Date</text>
          <text id="YLabel">Total Deaths</text>

          <VoronoiOverlay
            onHover={handleVoronoiHover}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
            allData={allData}
            lineGenerator={lineGenerator}
          />
        </g>
      </svg>
  )
}
