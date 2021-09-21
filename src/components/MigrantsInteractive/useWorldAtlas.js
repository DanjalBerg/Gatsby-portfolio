import { useState, useEffect } from 'react';
import * as d3 from 'd3';
//import useScript from '../../hooks/useScript'
import * as topojson from "topojson-client";
//import { feature, mesh } from 'topojson-client';
//const jsonUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'
const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

export const useWorldAtlas = () => {
  //const topojson = useScript('https://unpkg.com/topojson@3.0.2/dist/topojson.min.js')
  const [data, setData ] = useState(null);

  //console.log(feature)

  useEffect(() => {
    d3.json(jsonUrl).then(topojsonData => {
      const { countries, land } = topojsonData.objects;
      setData({
        land: topojson.feature(topojsonData, land),
        interiors: topojson.mesh(topojsonData, countries, (a,b) => a!==b)
      })
    })
  }, [])
  //console.log(data)
  return data
}
