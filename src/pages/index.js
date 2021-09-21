import React from 'react';
import { Link } from 'gatsby';

//components
import Header from '../components/Header';
import HeroImage from '../components/HeroImage';
import Grid from '../components/Grid';

//images
import Hero from '../images/HeroImage.png'


const gridTitles = ['CV', 'MasterThesis', 'D3Project', 'To be continued...']
const Home = () => {
  console.log(Hero)
  return (
    <>
      <Header />
      <HeroImage image={Hero}/>
      <Grid>
        {gridTitles.map((title) => (
          <Link to={`/${title}`} className="title-items" key={title}>{title}</Link>
        ))}
      </Grid>
    </>
  )
}

export default Home
