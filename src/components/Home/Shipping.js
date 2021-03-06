import React from 'react';
import { FcShipped } from "react-icons/fc";



const Shipping = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                <div className="stat border-[1px] border-black rounded-md my-10 py-10 flex justify-between">
                    <div>
                        <div className='flex'>
                            <div className="stat">
                                <div className='flex'>
                                    <FcShipped className='w-14 h-14 mr-5' />
                                    <div>
                                        <h2 className='font-bold text-2xl'>Free Shipping</h2>
                                        <p>$200000+ Orders</p>
                                    </div>
                                </div>
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                            <div className="stat">
                                <div className='flex'>
                                    <FcShipped className='w-14 h-14 mr-5' />
                                    <div>
                                        <h2 className='font-bold text-2xl'>Free Shipping</h2>
                                        <p>$200000+ Orders</p>
                                    </div>
                                </div>
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                            <div className="stat">
                                <div className='flex'>
                                    <FcShipped className='w-14 h-14 mr-5' />
                                    <div>
                                        <h2 className='font-bold text-2xl'>Free Shipping</h2>
                                        <p>$200000+ Orders</p>
                                    </div>
                                </div>
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                            <div className="stat">
                                <div className='flex'>
                                    <FcShipped className='w-14 h-14 mr-5' />

                                    <div>
                                        <h2 className='font-bold text-2xl'>Free Shipping</h2>
                                        <p>$200000+ Orders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Shipping;