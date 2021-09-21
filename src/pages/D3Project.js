import React from 'react';

//components
import Header from '../components/Header';
import MigrantsInteractive from '../components/MigrantsInteractive'

import CovidByCountry from '../components/CovidByCountry'

const D3Project = () => {
  return(
    <>
      <Header />
      <h1>D3 project with migrants total dead and missing and Global Coronavirus Deaths</h1>
      <p>These two plots are part of a 17 hour course on <a href={'https://www.youtube.com/watch?v=2LhoCfjm8R4'}>Data Visualization with D3, JavaScript and React</a> I have completed but the figures are slightly changed here.</p>
      <MigrantsInteractive />
      <h2>The Coronavirus data is filtered such that only countries with more than 20,000 deaths are included</h2>
      <CovidByCountry />

    </>
  )
}

export default D3Project;
