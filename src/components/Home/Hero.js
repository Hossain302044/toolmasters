import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import 'swiper/css';

import "swiper/css/autoplay";

import "swiper/css/pagination";
import "swiper/css/navigation";


import oil from './../../assets/hero/1.jpg'
import tires from './../../assets/hero/2.jpg'
import engine from './../../assets/hero/3.jpg'
import Demo from "./Demo";

const Hero = () => {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, Scrollbar, A11y]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Demo images={oil} content="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi." header="Oil Power With Best One Oil" />
                </SwiperSlide>
                <SwiperSlide>
                    <Demo images={tires} content="All seasion light truck & suv tire quet road performance, premium highway all-sesson tire, long life" header="Power is nothing without control" />
                </SwiperSlide>
                <SwiperSlide>
                    <Demo images={engine} content="Extend engine life . Give your vechicle a new lease on life with toolmaster." header="TUNE-up before you take off" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Hero;