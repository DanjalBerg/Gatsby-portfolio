import React, { useMemo } from 'react'
import * as d3 from 'd3';

const projection = d3.geoNaturalEarth1();
const path = d3.geoPath(projection);
const graticule = d3.geoGraticule();


export const Marks = (
  {worldAtlas: {land, interiors},
  data, sizeScale, sizeValue}) => (
  <g className="marks">
    { useMemo (() => (
      <>
        <path className="sphere" d={path({type: 'Sphere'})} />
        <path className="graticules" d={path(graticule())} />
        {
          land.features.map(feature => (
            <path key={feature} className="land" d={path(feature)} />
          ))
        }
        <path className="interiors" d={path(interiors)} />
      </>
    ), [land, interiors])}
    {
      //console.log(cities)
      data.map((d,i) => {
        const [x, y] = projection(d.coords);
        return <circle key={i} cx={x} cy={y} r={sizeScale(sizeValue(d))} />
      })
    }
  </g>
)
