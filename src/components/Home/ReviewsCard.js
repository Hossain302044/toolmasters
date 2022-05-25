import React from 'react';
import { FaStar } from "react-icons/fa";


const ReviewsCard = ({ review }) => {
    return (
        <div class="card w-96 bg-base-100 h-[300px] border-2">
            <div class="card-body h-full">
                <h2 class="text-2xl uppercase text-primary text-center font-bold">{review.name}</h2>
                <div className='flex justify-center items-center'>
                    <div className='flex items-center'>
                        <p className='text-[24px] font-bold text-secondary'>{review.rating}</p>
                        <FaStar className='w-5 h-5 text-center text-primary ml-1 mr-2' />
                        <p className=''>Ratings</p>
                    </div>
                </div>
                <p className='text-center'>{review.description.slice(0, 150)}...</p>
                <button>Read More</button>
            </div>
        </div>
    );
};

export default ReviewsCard;