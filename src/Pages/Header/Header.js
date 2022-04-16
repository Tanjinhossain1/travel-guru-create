import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    return (
        <div className=' flex justify-between items-center'>
            <div>
                <h2 className='text-4xl ml-32 text-white font-bold'>Travel-Guru</h2>
            </div>
            <div>
                <input className='bg-gray-100 rounded-xl py-2 border  mt-2 px-16' type="search" name="" id="" placeholder='Search your Destination... ' />

            </div>
            <div className='text-2xl mr-32 font-bold text-white'>
                <NavLink className={({ isActive }) => isActive ? 'text-orange-700 ml-12' : 'ml-12'} to={'/home'}>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-orange-700 ml-12' : 'ml-12'} to={'/News'}>News</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-orange-700 ml-12' : 'ml-12'} to={'/destination'}>Destination</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-orange-700 ml-12' : 'ml-12'} to={'/blog'}>Blog</NavLink>

                <NavLink className={({ isActive }) => isActive ? 'text-orange-700 ml-12' : 'ml-12'} to={'/contact'}>Contact</NavLink>
                {user ? <button onClick={()=>logout()} className='ml-12'>Log out</button> :
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-700 ml-12' : 'ml-12'} to={'/login'}>Login</NavLink>}
                {!user&&<NavLink className={({ isActive }) => isActive ? 'text-orange-700 ml-12' : 'ml-12'} to={'/signup'}>Sign UP</NavLink>}
            </div>
        </div>
    );
};

export default Header;