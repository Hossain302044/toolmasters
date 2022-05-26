import React from 'react';
import me from './../../assets/port/me.jpg'

const PortfolioRow = () => {
    return (

        <div className="card  w-96 md:w-full lg:w-[1240px] my-10 mx-auto lg:card-side bg-base-100 shadow-xl">
            <figure className='lg:w-1/2'><img src={me} className='w-full' alt="Album" /></figure>
            <div className="card-body lg:w-1/2">
                <h2 className="lg:text-4xl text-2xl font-bold text-primary uppercase">
                    Mohammad Hossain Ahmed
                </h2>
                <h2 className="text-2xl font-bold text-base-300 uppercase">
                    Web Developer
                </h2>
                <h2 className="text-[18px] font-bold lowercase">
                    hossainahmed3020@gmail.com
                </h2>
                <h2 className="text-[18px] font-bold uppercase">
                    +880 1724-591 912
                </h2>
                <h2 className="text-[18px] font-bold uppercase">
                    Dinajpur Polytechnic Institute
                </h2>

                <div className='divider'></div>
                <div className='text-center myt-20 text-3xl text-secondary uppercase font-bold'>
                    My Portfolio
                </div>
                <div className='divider'></div>
                <div>
                    <h2 className='text-2xl'>
                        Manufacture website: <div className='link link-primary'> https://manufacturer-website-cli-62442.firebaseapp.com/</div>
                    </h2>
                    <h2 className='text-2xl'>
                        Warehouse Management website: <div className='link link-primary'>https://warehouse-management-side.web.app/</div>
                    </h2>
                    <h2 className='text-2xl'>
                        Fitness website: <div className='link link-primary'>https://ayra-fitness.web.app/</div>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default PortfolioRow;