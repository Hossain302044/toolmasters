import React from 'react';

const BlogsCard = ({ questions, Answer }) => {
    return (
        <div className="card w-96 md:w-full lg:w-[1240px] mt-10 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{questions}</h2>
                <p>{Answer}</p>
            </div>
        </div>
    );
};

export default BlogsCard;