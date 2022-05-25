import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentFrom from './PaymentFrom';


const stripePromise = loadStripe('pk_test_51L3FZ1HXookATz8z7DCf2iNh5AQu8K8Od1RjUMvuKn4A3jIJSp9dcnP2X40CnLGEUyrWO6N7ETDQGsHnQUhVsVCZ00tRqy7Knr');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: booking, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='space-y-5 m-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <p>Hello, <span className='bg-primary font-bold p-1'>{booking.userName}</span></p>
                    <h2 className="text-2xl font-bold text-primary">Pay For: {booking.productName}</h2>
                    <p>Product quantity: <span className='text-error text-2xl'>{booking.qty}</span> pcs</p>
                    <p>Please Pay : <span className='text-error text-2xl'>${booking.price}</span></p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <PaymentFrom booking={booking} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default Payment;