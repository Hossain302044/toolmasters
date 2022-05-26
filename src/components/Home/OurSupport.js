import React from 'react';
import OurSupportRow from './OurSupportRow';
import { BiMedal } from "react-icons/bi";
import { FiLock } from "react-icons/fi";
import { RiSpaceShipLine, RiFindReplaceLine } from "react-icons/ri";


const OurSupport = () => {
    const biMedal = <BiMedal className='w-20 h-20 text-white' />
    const fiLock = <FiLock className='w-20 h-20 text-white' />
    const riSpaceShipLine = <RiSpaceShipLine className='w-20 h-20 text-white' />
    const riFindReplaceLine = <RiFindReplaceLine className='w-20 h-20 text-white' />
    return (
        <div className='bg-secondary pb-20'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='text-center py-20'>
                    <h2 className='text-white text-3xl'><span className='text-primary'>Tool</span>Masters</h2>
                    <h2 className='text-white text-4xl font-bold'>AND COMMITMENT COMBINED</h2>
                    <div class="mt-5 w-20 h-2 mx-auto bg-primary"></div>
                </div>
                <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <OurSupportRow icons={biMedal} header='Best' header2='Quality' content="Greate choice for your beautiful automotive" />
                    <OurSupportRow icons={fiLock} header='Secured' header2='Payment' content="All your payment information is safe" />
                    <OurSupportRow icons={riSpaceShipLine} header='Free' header2='Shipping' content="Free shipping on all order over $200000.00" />
                    <OurSupportRow icons={riFindReplaceLine} header='100% Products' header2='Guarantee' content="Free 100% refund for Damage Products in 30days" />
                </div>
            </div>
        </div>
    );
};

export default OurSupport;