import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { _id, name, price, img, qty } = product;
    const navigateToAddToCart = id => {
        navigate(`/products/${id}`);
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex justify-end items-center'>
                    <p className='text-2xl'><small>Price:</small> ${price}</p>
                    <p className='text-right'>Min Order: 10pcs - {qty}pcs</p>
                </div>
                <button onClick={() => navigateToAddToCart(_id)} className="btn btn-primary">Shop Now</button>

            </div>
        </div>
    );
};

export default ProductCard;