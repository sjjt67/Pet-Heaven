import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Footer from '../components/Footer';
import FeaturedPets from './FeaturedPets';
import Location from './Location';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <FeaturedPets />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;
