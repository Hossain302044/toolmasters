import React from 'react';
import oil from './../../assets/hero/1.jpg'
import tires from './../../assets/hero/2.jpg'
import engine from './../../assets/hero/3.jpg'

const Hero = () => {
    return (
        <div>


            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <div id="item1" class="hero min-h-[500px]" style={{
                        backgroundImage: `url(${oil})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div class="hero-overlay bg-opacity-20"></div>
                        <div class="hero-content justify-between w-full text-neutral-content">
                            <div>
                                <div className='md:w-3/6 '>
                                    <h1 class="mb-5 text-5xl font-bold text-secondary">Oil Power With Best One Oil</h1>
                                    <p class="mb-5 text-base-100">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button class="btn btn-primary">SHOPPING NOW</button>
                                </div>
                                <div className='md:w-3/6'></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="item2" class="carousel-item w-full">
                    <div id="item1" class="hero min-h-[500px]" style={{
                        backgroundImage: `url(${tires})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div class="hero-overlay bg-opacity-20"></div>
                        <div class="hero-content justify-between w-full text-neutral-content">
                            <div>
                                <div className='md:w-3/6 '>
                                    <h1 class="mb-5 text-5xl font-bold text-secondary">Oil Power With Best One Oil</h1>
                                    <p class="mb-5 text-base-100">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button class="btn btn-primary">SHOPPING NOW</button>
                                </div>
                                <div className='md:w-3/6'></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="item3" class="carousel-item w-full">
                    <div id="item1" class="hero min-h-[500px]" style={{
                        backgroundImage: `url(${engine})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div class="hero-overlay bg-opacity-20"></div>
                        <div class="hero-content justify-between w-full text-neutral-content">
                            <div>
                                <div className='md:w-3/6 '>
                                    <h1 class="mb-5 text-5xl font-bold text-secondary">Oil Power With Best One Oil</h1>
                                    <p class="mb-5 text-base-100">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button class="btn btn-primary">SHOPPING NOW</button>
                                </div>
                                <div className='md:w-3/6'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="flex justify-center w-full py-2 gap-2 -mt-10">
                <a href="#item1" class="btn btn-xs rounded">1</a>
                <a href="#item2" class="btn btn-xs rounded">2</a>
                <a href="#item3" class="btn btn-xs rounded">3</a>
            </div>

        </div >
    );
};

export default Hero;