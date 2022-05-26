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
        fetch('https://ancient-hollows-97544.herokuapp.com/reviews')
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

                    centeredSlides={true}
                    slidesPerView={1}
                    spaceBetween={10}
                    onSlideChange={() => console.log('')}
                    onSwiper={(swiper) => console.log(swiper)}
                    scrollbar={{ draggable: true }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Autoplay, A11y, Scrollbar]}
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