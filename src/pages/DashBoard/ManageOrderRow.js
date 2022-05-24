import React from 'react';

const ManageOrderRow = ({ order, index }) => {
    const { price, qty, productName, userName } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{userName}</td>
            <td>{qty} pcs</td>
            <td>${price}</td>
            <td><button className="btn btn-ghost btn-xs bg-error">Delete</button></td>
        </tr>
    );
};

export default ManageOrderRow;