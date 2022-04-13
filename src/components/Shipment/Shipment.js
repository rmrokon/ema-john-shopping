import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();



    const handleNameOnBlur = event => {
        setName(event.target.value);
    }

    const handlePhoneNumberOnBlur = e => {
        setPhone(e.target.value);
    }

    const handleAddressOnBlur = e => {
        setAddress(e.target.value);
    }

    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Shipping Information</h3>
                <form action="">
                    <div className='input-group'>
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameOnBlur} type="text" name="name" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressOnBlur} type="text" name="address" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneNumberOnBlur} type="number" name="phone" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;