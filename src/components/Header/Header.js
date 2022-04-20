import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <nav>
            <div><img src={logo} alt="" /></div>

            <div className='links'>
                <Link to="/Shop">Shop</Link>
                <Link to="/Orders">Orders</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/shipment">Shipment</Link>
                <Link to="/About">About</Link>
                {user ? <Link to={'/login'} onClick={handleSignOut}>Logout</Link> : <Link to="/login">Login</Link>}
                {!user && <Link to="/signup">Sign Up</Link>}
            </div>

        </nav>
    );
};

export default Header;