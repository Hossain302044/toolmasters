import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [orders, setOrders] = useState('');
    const [user] = useAuthState(auth);
    useEffect(() => {
        const getMyProducts = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/bookings?email=${email}`;
            try {
                await fetch(url)
                    .then(res => res.json())
                    .then(data => setOrders(data))
            } catch (error) {
                console.log(error?.message)
            }
        }
        getMyProducts();
    }, [user])
    console.log(orders);
    console.log(orders);
    return (
        <div>
            <div className='text-center'><h2 className='text-2xl font-bold text-primary uppercase px-5 my-10'>My Products</h2></div>
            <div className="divider"></div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>TD ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders && orders.map(order => <MyOrderRow
                                key={order._id}
                                order={order}
                            ></MyOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;