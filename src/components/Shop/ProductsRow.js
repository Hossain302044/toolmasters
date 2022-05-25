import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingProducts from './BookingProducts';

const ProductsRow = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [booking, setBooking] = useState(null);
    const { qty, name, description, price, img, minOrder } = product;
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const [orderQty, setOrderQty] = useState(0);
    useEffect(() => {
        setOrderQty(minOrder);
    }, [product])

    const handleMinOrder = (event) => {
        setOrderQty(event.target.value);
    }

    const buyProducts = () => {
        if (qty < orderQty) {
            alert(`Out of stack!! Must be order ${qty}`);
            setOrderQty(qty);
            return;
        }
        else if (orderQty < minOrder) {
            alert(`Must be order ${minOrder}`);
            setOrderQty(minOrder);
            return;
        }
        setBooking(product);
    }
    console.log(orderQty * price);

    return (
        <div className=''>
            <div className="card lg:card-side max-w-screen-xl mx-auto">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{name}</h1>
                            <div className="flex mb-4">
                                <div className="flex-grow text-cyan-400 border-b-2 border-cyan-500 py-2 text-lg px-1">Description</div>
                            </div>
                            <p className="leading-relaxed mb-4">{description}</p>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Quantity</span>
                                <span className="ml-auto text-gray-900">{qty}</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Min Order</span>
                                <span className="ml-auto text-gray-900">{minOrder}</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Price</span>
                                <span className="title-font font-medium text-2xl ml-auto text-gray-900">${product.price}</span>
                            </div>
                            <div className="flex justify-between">

                                <div className="form-control">
                                    <div>
                                        <input
                                            type="number"
                                            value={orderQty}
                                            name='qty'
                                            className="input input-bordered w-24"
                                            onChange={handleMinOrder}
                                        />
                                    </div>

                                </div>
                                <label
                                    onClick={buyProducts}
                                    for="booking-modal"
                                    className='btn max-w-md bg-primary border-primary text-white'
                                >Buy Now</label>
                            </div>

                        </div>

                        <img alt='' className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={img} />
                    </div>
                </div>
            </div>
            {
                booking && <BookingProducts
                    booking={booking}
                    orderQty={orderQty}
                    setBooking={setBooking}
                ></BookingProducts>
            }
        </div>
    );
};

export default ProductsRow;