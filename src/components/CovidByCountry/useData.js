import { useState, useEffect } from 'react';
import * as d3 from 'd3';

//const csvUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/91744e0c3ac9b184b61d310e6815ae098c3097e8/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv'

const csvUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv'

//const latestDate = data.columns[data.columns.length -1]

const parseDay = d3.timeParse("%m/%d/%y")

const transform = rawData => {
  const countriesData = rawData.filter(d => !d['Province/State'])

  //console.log(countriesData[countriesData.length -1])

  const days = rawData.columns.slice(4);
  //console.log(countriesData.map(d => +d[days[ days.length-1 ]]))

  //console.log(days)
  //const reducedData = countriesData.map(d => +d[day])// .reduce((a,b) => a+b)
  //const reducedData = {deathsToday: countriesData.map(d => +d[days[ days.length-1 ]]),
  //countryName: countriesData.map(d => d['Country/Region'])}//.reduce((a,b) => a+b)
  //console.log(reducedData)

  //const reducedFilter = reducedData.deathsToday.map(d => d > 10000)
  //console.log(reducedFilter)

  //const reducedData2 = countriesData.filter(d => reducedData.deathsToday.map(d => d > 10000))

  //const reducedData2 = countriesData.filter(country => country[reducedFilter])
  const reducedcountriesData = countriesData.filter(country => +country[days[ days.length-1 ]] > 20000)
  //console.log(reducedcountriesData)

  return (
    reducedcountriesData.map(d => {
      const countryName = d['Country/Region'];

      const countryTimeseries = (days.map(day => ({
            date: parseDay(day),
            deathsTotal: +d[day],
            countryName
        })));

      countryTimeseries.countryName = countryName;
      return countryTimeseries;
    })
  );
};

export const useData = () => {
  const [data, setData ] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl).then(rawData => {

      setData(transform(rawData))
    })
  }, [])
  //console.log(data)
  return data
}
