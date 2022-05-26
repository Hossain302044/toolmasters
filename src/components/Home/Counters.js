import React from 'react';
import { VscPackage, VscListUnordered } from "react-icons/vsc";
import { FaUsers, FaCheckCircle } from "react-icons/fa";
import CountUp from 'react-countup';


const Counters = () => {
    return (
        <div>
            <div className="w-full">
                <div className="hero py-[80px] min-h-[500px]" >
                    <div className="max-w-screen-xl w-full">
                        <div className='my-20'>
                            <h2 className='text-3xl text-center'>Here to help you to find a best way</h2>
                            <h2 className='text-secondary text-center text-4xl font-bold uppercase'>help you to grow your business</h2>
                            <div className="mt-5 w-20 h-2 mx-auto bg-primary"></div>
                        </div>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                            <div>
                                <div className="stat">
                                    <div className='flex justify-center items-center'>
                                        <VscPackage className='w-20 h-20 text-primary' />
                                    </div>
                                    <CountUp className="stat-value text-center text-5xl" delay={2} end={225789} />
                                    <div className="stat-desc text-center text-2xl">In Stock Products</div>
                                </div>
                            </div>
                            <div>
                                <div className="stat">
                                    <div className='flex justify-center items-center'>
                                        <VscListUnordered className='text-primary w-20 h-20' />
                                    </div>
                                    <CountUp className="stat-value text-center text-5xl" delay={2} end={1500} />
                                    <div className="stat-desc text-center text-2xl">Products Categories</div>
                                </div>
                            </div>
                            <div>
                                <div className="stat">
                                    <div className='flex justify-center items-center'>
                                        <FaUsers className='w-20 h-20 text-primary' />
                                    </div>
                                    <CountUp className="stat-value text-center text-5xl" delay={2} end={22580} />
                                    <div className="stat-desc text-center text-2xl">Staffs</div>
                                </div>
                            </div>
                            <div>
                                <div className="stat">
                                    <div className='flex justify-center items-center'>
                                        <FaCheckCircle className=' w-20 h-20 text-primary' />
                                    </div>
                                    <CountUp className="stat-value text-center text-5xl" delay={2} end={500850} />
                                    <div className="stat-desc text-center text-2xl">Order Complete</div>
                                </div>
                            </div>
                        </div>
                        <div className="stats mt-10 lg:mt-20 lg:border-2 border-secondary w-full shadow-lg shadow-pink-500/10">
                            <div className="stat py-14 px-0 lg:px-16 lg:flex space-y-5 lg:space-y-0 justify-between">
                                <div className='space-y-2 lg:space-y-0 text-center mx-5'>
                                    <h2 className='text-4xl font-bold text-primary '>Would you like to start  with us?</h2>
                                    <p className='text-[18px] text-base-500'>
                                        If you are interested in our product, please knock us on the Place.
                                    </p>
                                </div>
                                <div className='flex justify-center'>
                                    <button className="btn btn-primary text-white font-bold">Request For Quote</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
};

export default Counters;