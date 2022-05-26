import React from 'react';
import Cards from './Cards';
import oil from './../../assets/product/oil.png';
import tires from './../../assets/product/car-tire.png';
import engine from './../../assets/product/engine.png';



const HeroCard = () => {
    return (
        <div className='my-[80px]'>
            <div className='max-w-screen-xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <Cards cardTitle="Best Car Oil" price="23.99" img={oil} bgClasses="bg-[#3b7c9f] "></Cards>
                <Cards cardTitle="Best Tire" price="59.99" img={tires} bgClasses="bg-[#f25932] "></Cards>
                <Cards cardTitle="Best Engine" price="1299.99" img={engine} bgClasses="bg-[#f3b934] "></Cards>
            </div>
        </div>
    );
};

export default HeroCard;