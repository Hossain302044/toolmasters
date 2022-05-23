import React from 'react';
import oil from './../../assets/hero/1.jpg'
import tires from './../../assets/hero/2.jpg'
import engine from './../../assets/hero/3.jpg'

const Hero = () => {
    return (
        <div>


            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div id="item1" className="hero min-h-[500px]" style={{
                        backgroundImage: `url(${oil})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content justify-between w-full text-neutral-content">
                            <div>
                                <div className='md:w-3/6 '>
                                    <h1 className="mb-5 text-5xl font-bold text-secondary">Oil Power With Best One Oil</h1>
                                    <p className="mb-5 text-base-100">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="btn btn-primary">SHOPPING NOW</button>
                                </div>
                                <div className='md:w-3/6'></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="item2" className="carousel-item w-full">
                    <div id="item1" className="hero min-h-[500px]" style={{
                        backgroundImage: `url(${tires})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content justify-between w-full text-neutral-content">
                            <div>
                                <div className='md:w-3/6 '>
                                    <h1 className="mb-5 text-5xl font-bold text-secondary">Oil Power With Best One Oil</h1>
                                    <p className="mb-5 text-base-100">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="btn btn-primary">SHOPPING NOW</button>
                                </div>
                                <div className='md:w-3/6'></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="item3" className="carousel-item w-full">
                    <div id="item1" className="hero min-h-[500px]" style={{
                        backgroundImage: `url(${engine})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content justify-between w-full text-neutral-content">
                            <div>
                                <div className='md:w-3/6 '>
                                    <h1 className="mb-5 text-5xl font-bold text-secondary">Oil Power With Best One Oil</h1>
                                    <p className="mb-5 text-base-100">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button className="btn btn-primary">SHOPPING NOW</button>
                                </div>
                                <div className='md:w-3/6'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex justify-center w-full py-2 gap-2 -mt-10">
                <a href="#item1" className="btn btn-xs rounded">1</a>
                <a href="#item2" className="btn btn-xs rounded">2</a>
                <a href="#item3" className="btn btn-xs rounded">3</a>
            </div>

        </div >
    );
};

export default Hero;