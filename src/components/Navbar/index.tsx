import Logo from 'components/Logo';
import React from 'react';
import Account from './Account';
import Cart from './Cart';

const Navbar = () => {
    return (
        <div className='border-b border-gray-200'>
            <div className='max-w-7xl mx-auto p-5 flex justify-between items-center'>
                <div>
                    <Logo />
                </div>
                <div className='flex'>
                    <Cart className='mr-6' />
                    <Account />
                </div>
            </div>
        </div>
    )
}

export default Navbar
