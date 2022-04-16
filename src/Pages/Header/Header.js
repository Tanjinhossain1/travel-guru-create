import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' flex justify-between items-center'>
            <div>
                <h2 className='text-4xl ml-32 text-white font-bold'>Travel-Guru</h2>
            </div>
            <div>
                <input className='bg-gray-100 rounded-xl py-2 border  mt-2 px-16' type="search" name="" id="" placeholder='Search your Destination... ' />
               
            </div>
            <div className='text-2xl mr-32 font-bold text-white'>
                <NavLink className={({isActive})=>isActive ?'text-orange-700 ml-12': 'ml-12'} to={'/home'}>Home</NavLink>
                <NavLink className={({isActive})=>isActive ?'text-orange-700 ml-12': 'ml-12'} to={'/News'}>News</NavLink>
                <NavLink className={({isActive})=>isActive ?'text-orange-700 ml-12': 'ml-12'} to={'/destination'}>Destination</NavLink>
                <NavLink className={({isActive})=>isActive ?'text-orange-700 ml-12': 'ml-12'} to={'/blog'}>Blog</NavLink>
                <NavLink className={({isActive})=>isActive ?'text-orange-700 ml-12': 'ml-12'} to={'/contact'}>Contact</NavLink>
            </div>
        </div>
    );
};

export default Header;