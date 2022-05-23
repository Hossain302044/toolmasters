import React from 'react';

const ManageProductRow = ({ product, index }) => {
    const { name, price, img, qty } = product;


    return (
        <tr>
            <th>{index + 1}</th>
            <td><img src={img} className='w-12 h-12 rounded-md' alt="" /></td>
            <td>{name}</td>
            <td>{qty} pcs</td>
            <td>${price}</td>
            <td><button class="btn btn-ghost btn-xs bg-error">Delete</button></td>
        </tr>
    );
};

export default ManageProductRow;