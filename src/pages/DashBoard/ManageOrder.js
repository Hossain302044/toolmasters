import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading';
import ManageOrderRow from './ManageOrderRow';

const ManageOrder = () => {

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/booking', {
        method: 'GET',
        headers: {
            'authorization': `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='text-center'><h2 className='text-2xl font-bold text-primary uppercase px-5 my-10'>Manage Products</h2></div>
            <div className="divider"></div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>User Name</th>
                            <th>Qty</th>
                            <th>price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageOrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                            ></ManageOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;