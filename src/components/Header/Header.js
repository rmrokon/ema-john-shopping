import React from 'react';
import logo from '../../images/Logo.svg'
import Shop from '../Shop/Shop';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div><img src={logo} alt="" /></div>

            <div className='links'>
                <a href="/Shop">Shop</a>
                <a href="/Orders">Orders</a>
                <a href="/Inventory">Inventory</a>
                <a href="/About">About</a>
            </div>

        </nav>
    );
};

export default Header;