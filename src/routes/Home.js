import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroImg />
        <PricingCard />
        <Footer />
    </div>
  );
};

export default Home;