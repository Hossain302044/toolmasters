import React from 'react';

const HomeAboutsRow = ({ img, header, content }) => {
    return (
        <div class="card w-full bg-base-100 shadow-xl image-full">
            <figure><img src={img} className='w-full lg:max-h-80 bg-cover' alt="" /></figure>
            <div class="card-body">
                <h2 class="text-5xl font-bold text-white">{header}</h2>
                <p className='text-white text-[20px]'>{content}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Discover our products</button>
                </div>
            </div>
        </div>
    );
};

export default HomeAboutsRow;