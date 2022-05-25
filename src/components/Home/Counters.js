import React from 'react';
import bg from './../../assets/counter/1567666.webp'
import { FcConferenceCall, FcApproval, FcRating } from "react-icons/fc";
import { FaAward } from "react-icons/fa";

const Counters = () => {
    return (
        <div>
            <div className="w-full">
                <div className="hero py-[80px] min-h-[500px]" style={{
                    backgroundImage: `url(${bg})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="max-w-screen-xl w-full">
                        <div className='mb-20'>
                            <h2 className='text-secondary text-center text-4xl font-bold '>Helping small <span className='font-normal'>Business to grow</span> and expand</h2>
                            <div class="mt-5 w-20 h-2 mx-auto bg-primary"></div>
                        </div>
                        <div className='w-full flex justify-between items-center flex-wrap'>
                            <div>
                                <div className="stat">
                                    <div className='flex justify-center items-center'>
                                        <FcApproval className='w-24 h-24' />
                                    </div>
                                    <div className="stat-value text-center text-5xl">250+</div>
                                    <div className="stat-desc text-center text-2xl text-primary">Complete Order</div>
                                </div>
                            </div>
                            <div>
                                <div className="stat">
                                    <div className='flex justify-center items-center'>
                                        <FaAward className='text-primary w-24 h-24' />
                                    </div>
                                    <div className="stat-value text-center text-5xl">10</div>
                                    <div className="stat-desc text-center text-2xl text-primary">Awards</div>
                                </div>
                            </div>
                            <div>
                                <div className="stat">
                                    <div className='flex justify-center items-center'>
                                        <FcConferenceCall className='w-24 h-24' />
                                    </div>
                                    <div className="stat-value text-center text-5xl">350+</div>
                                    <div className="stat-desc text-center text-2xl text-primary">Happy Clients</div>
                                </div>
                            </div>
                            <div>
                                <div className="stat">
                                    <div className='flex justify-center items-center'>
                                        <FcRating className=' w-24 h-24' />
                                    </div>
                                    <div className="stat-value text-center text-5xl">222+</div>
                                    <div className="stat-desc text-center text-2xl text-primary">Feedbacks</div>
                                </div>
                            </div>
                        </div>
                        <div className="stats w-full shadow-md">
                            <div className="stat py-14 flex justify-between">
                                <div>
                                    <h2 className='text-4xl font-bold text-primary '>Would you like to start  with us?</h2>
                                    <p className='text-[18px] text-base-500'>
                                        If you are interested in our product, please knock us on the Place.
                                    </p>
                                </div>
                                <button className="btn btn-warning hover:bg-yellow-500 text-white font-bold">Request For Quote</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
};

export default Counters;