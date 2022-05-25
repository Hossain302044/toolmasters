import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderRow = ({ order }) => {
    const { _id, productName, qty, price } = order;
    return (
        <tr>
            <th></th>
            <td>{productName}</td>
            <td>{qty}</td>
            <td>${price}</td>
            <td>{price && <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-ghost btn-xs bg-error">Pay Now</button></Link>}</td>
            <td><button className="btn btn-ghost bg-green-500 border-green-500 btn-xs bg-error">id</button></td>
        </tr>
    );
};

export default MyOrderRow;