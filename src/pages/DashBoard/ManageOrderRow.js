import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ order, index, refetch }) => {
    const { _id, price, qty, productName, userName, paid, delivery } = order;

    const handleStatus = (id) => {
        fetch(`https://ancient-hollows-97544.herokuapp.com/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Delivered Complete');
                refetch();
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{userName}</td>
            <td>{qty} pcs</td>
            <td>${price}</td>
            <td>
                {
                    delivery
                        ?
                        <p className='btn btn-ghost bg-success btn-xs'>Order Delivered</p>
                        :
                        <button onClick={() => handleStatus(_id)} className="btn btn-ghost btn-xs bg-green-500 bg-error" disabled={!paid}>
                            {
                                paid
                                    ?
                                    'Delivered'
                                    :
                                    'payment pending'}
                        </button>
                }
            </td>
        </tr>
    );
};

export default ManageOrderRow;