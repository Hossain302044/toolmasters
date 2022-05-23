import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = ({ children }) => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };

    const menuItem = <>
        <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
        <li><NavLink to='/blog' className='rounded-lg'>Blogs</NavLink></li>
        {
            user
                ?
                <>
                    <li><NavLink to='/dashboard' className='rounded-lg'>Dashboard</NavLink></li>
                    <button className='btn btn-ghost' onClick={logout}> Sign Out</button>
                </>
                :
                <>
                    <li><NavLink to='/login' className='rounded-lg'>Login</NavLink></li>
                    <li><NavLink to='/signup' className='rounded-lg'>Signup</NavLink></li>
                </>
        }
    </>
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="max-w-screen-xl mx-auto navbar bg-white z-50">
                    {
                        user &&
                        <label htmlFor="dashboard-sidebar" tabIndex="1" className="btn btn-square btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    }
                    <div className="flex-1 px-2 mx-2 text-primary font-bold text-3xl">Tool<span className='text-secondary'>Masters</span></div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-x-2">
                            {menuItem}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {menuItem}
                </ul>

            </div>
        </div>

    );
};

export default Navbar;