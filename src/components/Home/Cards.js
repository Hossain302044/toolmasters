import React from 'react';

const Cards = ({ img, bgClasses, cardTitle, price }) => {
    return (
        <div className={`card rounded-none max-w-lg bg-base-100 shadow-md ${bgClasses}`} >
            <div className='flex justify-between my-10'>
                <div className='w-3/6 flex flex-col justify-center pl-5'>
                    <p className='text-1xl font-semibold text-base-200'>
                        <small>New Arrival</small>
                    </p>
                    <h2 className='text-3xl font-bold text-secondary'>{cardTitle}</h2>
                    <h6 className='text-white text-2xl'>${price}</h6>
                    <div>
                        <button className='btn btn-secondary mt-2'>Shop Now</button>
                    </div>
                </div>
                <div className='w-3/6 relative'>
                    <img src={img} className="absolute bottom-0 top-0 mt-9 w-[200px]" alt="album" />
                </div>
            </div>
        </div >
    );
};

export default Cards;