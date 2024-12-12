import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PopularTools from '../components/home/PopularTools';
import Categories from '../components/home/Categories';
import Newsletter from '../components/home/Newsletter';
import FeaturedTools from '../components/home/FeaturedTools';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturedTools />
      <PopularTools />
      <Categories />
      <Newsletter />
    </>
  );
};

export default Home;
