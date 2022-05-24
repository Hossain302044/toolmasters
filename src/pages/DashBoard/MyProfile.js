import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcManager } from "react-icons/fc";
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className='m-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='rounded-full w-24 h-24 bg-slate-400 flex justify-center items-end relative overflow-hidden	'>
                        <FcManager className='w-24 h-24 rounded-full absolute bottom-0 top-0 mt-2' />
                    </div>
                    <h2 className="text-[18px] font-bold uppercase">
                        UserName: {user.displayName}
                    </h2>
                    <h2 className="text-[18px] font-bold uppercase">
                        Email: {user.email}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;