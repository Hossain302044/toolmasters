import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SocailIcon = () => {
    return (
        <div className='bg-primary'>
            <div className="max-w-screen-xl mx-auto">
                <div className="stat py-14 lg:flex space-y-5 lg:space-y-0 justify-between">
                    <div>
                        <h2 className='text-4xl font-bold text-white text-center lg:text-left'>We Have Recommendations For You
                        </h2>
                        <p className='text-[14px] text-base-600 text-center lg:text-left'>
                            Take 15% off when you spend $2000 or more with code toolMaseters.
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <button className="btn btn-secondary rounded-full text-white font-bold">Subscribe Now</button>
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                        <div className='w-12 h-12 rounded-full border-white border-2 flex justify-center items-center'>
                            <FaFacebookF className='w-8 h-8 text-white' />
                        </div>
                        <div className='w-12 h-12 rounded-full border-white border-2 flex justify-center items-center'>
                            <FaTwitter className='w-8 h-8 text-white' />
                        </div>
                        <div className='w-12 h-12 rounded-full border-white border-2 flex justify-center items-center'>
                            <FaInstagram className='w-8 h-8 text-white' />
                        </div>
                        <div className='w-12 h-12 rounded-full border-white border-2 flex justify-center items-center'>
                            <FaLinkedinIn className='w-8 h-8 text-white' />
                        </div>
                        <div className='w-12 h-12 rounded-full border-white border-2 flex justify-center items-center'>
                            <FaYoutube className='w-8 h-8 text-white' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SocailIcon;