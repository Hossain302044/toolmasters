import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../../shared/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    // const [orders, setOrders] = useState('');
    const [user] = useAuthState(auth);

    const email = user?.email;
    const { data: orders, isLoading } = useQuery('orders', () => fetch(`https://ancient-hollows-97544.herokuapp.com/bookings?email=${email}`, {
        method: 'GET',
        headers: {
            'authorization': `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     const getMyProducts = async () => {
    //         const email = user?.email;
    //         const url = `https://ancient-hollows-97544.herokuapp.com/bookings?email=${email}`;
    //         try {
    //             await fetch(url)
    //                 .then(res => res.json())
    //                 .then(data => setOrders(data))
    //         } catch (error) {
    //             console.log(error?.message)
    //         }
    //     }
    //     getMyProducts();
    // }, [user]);

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
                            <th>Status</th>
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