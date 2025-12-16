// pages/Home.jsx - Updated
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedItems from '../components/home/FeaturedItems';
import DealsSection from '../components/home/DealsSection';
import QuickMenu from '../components/home/QuickMenu';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedItems />
      <DealsSection />
      <QuickMenu />
      <Testimonials />
      <Gallery />
    </div>
  );
};

export default Home;