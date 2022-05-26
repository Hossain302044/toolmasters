import React from 'react';

const OurSupportRow = ({ icons, header, header2, content }) => {
    return (
        <div className="card shadow-xl text-white text-center">
            <div className="card-body gap-0">
                <div className='flex justify-center items-center mb-4'>
                    {icons}
                </div>
                <h2 className="text-2xl">{header}</h2>
                <h2 className="text-2xl mb-7">{header2}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default OurSupportRow;