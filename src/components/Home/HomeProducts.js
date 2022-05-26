import React, { useEffect, useState } from 'react';
import ProductCard from '../../shared/ProductCard';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://ancient-hollows-97544.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='max-w-screen-xl mx-auto my-[80px]'>
            <div className='text-center py-6 my-20 text-slate-300'>
                <h2 className='text-2xl uppercase'>Our Products</h2>
                <h3 className='text-3xl md:text-5xl font-bold text-secondary sm:py-1 md:py-4'>The right price for<br /> your products!</h3>
                <div className="mt-5 w-20 h-1 mx-auto bg-primary"></div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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