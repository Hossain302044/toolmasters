import React, { useEffect, useState } from 'react';
import ManageProductRow from './ManageProductRow';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products', {
            method: "GET",
            headers: {
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const DeleteToProduct = id => {
        const proceed = window.confirm('are you sure we want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: "DELETE",
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div>
            <div className='text-center'><h2 className='text-2xl font-bold text-primary uppercase px-5 my-10'>All Products</h2></div>
            <div className="divider"></div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                DeleteToProduct={DeleteToProduct}
                            ></ManageProductRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;