import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailOnBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordOnBlur = e => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordOnBlur = e => {
        setConfirmPassword(e.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords did not match');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Sign Up</h3>
                <form action="">
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailOnBlur} type="email" name="email" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordOnBlur} type="Password" name="password" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordOnBlur} type="Password" name="confirm-password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input onClick={handleCreateUser} className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>Already have an account? <Link className='form-link' to={'/login'}>Login</Link></p>
                <div className='or-section'>
                    <div className='line-div' />
                    <span className='or'>Or</span>
                    <div className='line-div' />
                </div>
                <div className='google-signin'>
                    <button>Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;