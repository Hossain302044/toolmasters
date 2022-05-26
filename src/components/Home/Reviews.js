import React from 'react';
import { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import 'swiper/css';

import "swiper/css/autoplay";

import "swiper/css/pagination";
import "swiper/css/navigation";
import ReviewsCard from './ReviewsCard';


const Reviews = () => {
    const [reviews, setReviews] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='max-w-screen-xl mx-auto my-[50px]'>
            <div className='my-20'>
                <h2 className='text-3xl text-center'>Our clients say somethings</h2>
                <h2 className='text-secondary text-center text-4xl font-bold uppercase'>Our Happy Clients Reviews</h2>
                <div className="mt-5 w-20 h-2 mx-auto bg-primary"></div>
            </div>
            <div className='py-[50px]'>
                <Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={3}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Scrollbar, A11y]}
                    className="mySwiper"
                >
                    {
                        reviews &&
                        reviews.map((review, index) => <SwiperSlide>
                            <ReviewsCard
                                key={index}
                                review={review}
                            ></ReviewsCard>
                        </SwiperSlide>
                        )
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;