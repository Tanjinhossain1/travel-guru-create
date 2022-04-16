import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' flex justify-between'>
            <div>
                <h2 className='text-4xl ml-32 text-white font-bold'>Travel-Guru</h2>
            </div>
            <div className='text-2xl mr-32 font-bold text-white'>
                <NavLink className={({isActive})=>isActive ?'text-orange-700 ml-12': 'ml-12'} to={'/home'}>Home</NavLink>
                <NavLink className={({isActive})=>isActive ?'text-orange-700 ml-12': 'ml-12'} to={'/News'}>News</NavLink>
                <NavLink className={({isActive})=>isActive ?'text-orange-700 ml-12': 'ml-12'} to={'/blog'}>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;