import React, { useEffect, useState } from 'react';
import ProductCard from '../shared/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://ancient-hollows-97544.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='max-w-screen-xl mx-auto my-[80px]'>
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

export default Products;