import React from 'react';

const ProductCard = ({ product }) => {
    const { name, price, img, qty } = product;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-5 pt-5">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <div className='flex justify-end items-center'>
                    <p className='text-2xl'><small>Price:</small> ${price}</p>
                    <p className='text-right'>Min Order: 10pcs - {qty}pcs</p>
                </div>
                <button class="btn btn-primary">Shop Now</button>

            </div>
        </div>
    );
};

export default ProductCard;