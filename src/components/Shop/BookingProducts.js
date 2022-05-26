import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingProducts = ({ booking, orderQty, setBooking }) => {
    const [user] = useAuthState(auth);
    const { _id, img, name, price, qty } = booking;
    const totalPrice = parseInt(orderQty) * parseInt(price);
    const restQty = qty - orderQty;

    const handleBooking = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const address = event.target.address.value;

        const booking = {
            productId: _id,
            productName: name,
            qty: orderQty,
            price: totalPrice,
            userName: user.displayName,
            email: user.email,
            phone,
            address
        }
        fetch('https://ancient-hollows-97544.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const quantity = {
                        qty: restQty
                    }
                    toast.success('congratulations !! for your Order');
                    fetch(`https://ancient-hollows-97544.herokuapp.com/products/${_id}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(quantity)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log("update", result);
                        })
                }
                //to closs modal
                setBooking(null);
            })

    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-white">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className="card-title text-secondary">{name}</h2>
                    <div className="card lg:card-side bg-base-100 mt-10 shadow-xl">
                        <figure className='border m-3'><img src={img} className="max-h-[450px]" alt="Album" /></figure>
                        <div className="card-body">

                            <form onSubmit={handleBooking}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' value={user.displayName} disabled className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Order Quantity</span>
                                    </label>
                                    <input type="text" name='qty' value={orderQty} disabled className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Total Price</span>
                                    </label>
                                    <input type="text" name='price' value={"$" + totalPrice} disabled className="input input-bordered w-full" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" name='phone' placeholder='Please give me your contact number' className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Shipping Locations</span>
                                    </label>
                                    <textarea name='address' className="textarea textarea-bordered w-full h-24" placeholder="Address Please" required></textarea>
                                </div>
                                <div className="form-control mt-5">
                                    <div className='flex justify-center'>
                                        <input className="btn btn-primary" type="submit" value="ORDER NOW" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookingProducts;