import React from 'react';
import ContactH from '../components/Home/ContactH';
import Counters from '../components/Home/Counters';
import Hero from '../components/Home/Hero';
import HeroCard from '../components/Home/HeroCard';
import HomeAbouts from '../components/Home/HomeAbouts';
import HomeProducts from '../components/Home/HomeProducts';
import OurSupport from '../components/Home/OurSupport';
import Reviews from '../components/Home/Reviews';
import SocailIcon from '../components/Home/SocailIcon';

const Home = () => {
    return (
        <div>
            <Hero />
            <HeroCard />
            <HomeProducts />
            <HomeAbouts />
            <OurSupport />
            <Counters />
            <Reviews />
            <ContactH />
            <SocailIcon />
        </div>
    );
};

export default Home;