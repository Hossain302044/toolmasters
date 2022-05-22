import React, { useEffect, useState } from 'react';
import ProductCard from '../../shared/ProductCard';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='max-w-screen-xl mx-auto my-[80px]'>
            <div className='text-center py-6 text-slate-300'>
                <h2 className='text-2xl uppercase'>Our Products</h2>
                <h3 className='text-5xl font-bold text-secondary py-4'>The right price for<br /> your products!</h3>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default HomeProducts;