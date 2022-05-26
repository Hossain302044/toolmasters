import React from 'react';
import HomeAboutsRow from './HomeAboutsRow';
import parts from './../../assets/img/20319e.jpg'
import wordshop from './../../assets/img/Mold-Design.jpg'

const HomeAbouts = () => {
    const headerText = `Forward Thinking.${<br />} Available Now.`
    return (
        <div className='my-[80px]'>
            <div className='text-center my-20'>
                <h2 className='text-secondary text-3xl'>Why best our products?</h2>
                <h2 className='text-secondary text-4xl font-bold'>WHY WE CAN BUY YOUR PRODUCTS</h2>
                <div class="mt-5 w-20 h-2 mx-auto bg-primary"></div>
            </div>
            <div className='max-w-screen-xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2'>
                <HomeAboutsRow img={parts} header="Solutions for Cleaner, More Efficients" content="ToolMaster is the world's leading manufacturers and marketers of automotive products for original equipment" />
                <HomeAboutsRow img={wordshop} header='Thinking Betters Now. Available Now.' content="ur future-focused technologies are redefining how drivers experience mobility." />
            </div>
        </div>
    );
};

export default HomeAbouts;