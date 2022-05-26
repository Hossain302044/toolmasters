import React from 'react';

const Demo = ({ images, header, content }) => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div id="item1" className="hero min-h-[500px]" style={{
                        backgroundImage: `url(${images})`, backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content justify-between w-full text-neutral-content">
                            <div>
                                <div className='md:w-3/6 '>
                                    <h1 className="mb-5 text-5xl font-bold uppercase text-secondary">{header}</h1>
                                    <p className="mb-5 text-base-100">{content}</p>
                                    <button className="btn btn-primary">SHOPPING NOW</button>
                                </div>
                                <div className='md:w-3/6'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Demo;