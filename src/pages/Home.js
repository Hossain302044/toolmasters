import React from 'react';
import Counters from '../components/Home/Counters';
import Hero from '../components/Home/Hero';
import HeroCard from '../components/Home/HeroCard';
import HomeProducts from '../components/Home/HomeProducts';
import Reviews from '../components/Home/Reviews';
import Shipping from '../components/Home/Shipping';
import SocailIcon from '../components/Home/SocailIcon';

const Home = () => {
    return (
        <div>
            <Hero />
            <HeroCard />
            <HomeProducts />
            <Counters />
            <Reviews />
            <Shipping />
            <SocailIcon />
        </div>
    );
};

export default Home;