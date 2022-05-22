import React from 'react';
import Hero from '../components/Home/Hero';
import HeroCard from '../components/Home/HeroCard';
import HomeProducts from '../components/Home/HomeProducts';

const Home = () => {
    return (
        <div>
            <Hero />
            <HeroCard />
            <HomeProducts />
        </div>
    );
};

export default Home;