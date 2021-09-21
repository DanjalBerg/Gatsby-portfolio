import * as d3 from 'd3';
import React, { useMemo } from 'react';
export const VoronoiOverlay = ({
  innerWidth,
  innerHeight,
  allData,
  lineGenerator,
  onHover
}) => {
  //useMemo(() => {
  //  console.log('memoizing');
  //}, [allData, lineGenerator, innerWidth, innerHeight, onHover]); //])
  return useMemo(() => {
    console.log('memoizing');
    const points = allData.map(d => [
      lineGenerator.x()(d),
      lineGenerator.y()(d)
    ]);
    const delaunay = d3.Delaunay.from(points);
    const voronoi = delaunay.voronoi([0, 0, innerWidth, innerHeight]);
    //console.log(voronoi)
    return (
      <g className="voronoi">
        {points.map((point, i) => (
          <path key={i}
            onMouseEnter={() => onHover(allData[i])}
            d={voronoi.renderCell(i)}
          />
        ))}
      </g>
    );
  }, [allData, lineGenerator, innerWidth, innerHeight, onHover]);
};

/*
import {useMemo} from 'react';

export const VoronoiOverlay = ({
    innerWidth,
    innerHeight,
    allData,
    lineGenerator,
    onHover }) => {
  //console.log(d3.Delaunay)

  const points = allData.map(d => [lineGenerator.x()(d), lineGenerator.y()(d)]);
  //const points = [[0,0], [200,200], [150,400]]
  const delaunay = d3.Delaunay.from(points);
  const voronoi = delaunay.voronoi([0, 0, innerWidth, innerHeight]);
  console.log(voronoi)
  return (
    <g>
      {points.map((point, i) => (
        <path
          id="voronoi"
          onMouseEnter={onHover}
          fill="none"
          stroke="red"
          d={voronoi.renderCell(i)}/>
      ))}
    </g>
  )
}
*/
