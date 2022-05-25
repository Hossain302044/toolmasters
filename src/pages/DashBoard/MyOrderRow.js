import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderRow = ({ order }) => {
    const { _id, productName, qty, price, paid, transactionId, delivery } = order;
    return (
        <tr>
            <th></th>
            <td>{productName}</td>
            <td>{qty}</td>
            <td>${price}</td>
            <td>
                {(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-ghost btn-xs bg-error">Pay Now</button></Link>}
                {(price && paid) && <button className="text-success">Paid</button>}
            </td>
            <td><button className="btn btn-ghost bg-green-500 border-green-500 btn-xs bg-error">Transaction Id: {transactionId}</button></td>
            <td>{
                paid
                    ?
                    <>
                        {
                            delivery
                                ?
                                <button className="btn btn-ghost btn-xs bg-success">Shipped</button>
                                :
                                <button className="btn btn-ghost btn-xs bg-primary">Pending</button>
                        }
                    </>
                    :
                    <button className="btn btn-ghost bg-error btn-xs ">Payment Update Please</button>}
            </td>
        </tr>
    );
};

export default MyOrderRow;