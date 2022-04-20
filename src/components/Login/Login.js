import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [signInWithEmailAndPassword,
        user, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleEmailOnBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePassOnBlur = (e) => {
        setPass(e.target.value);
    }

    if (user || userGoogle) {
        navigate(from);
    }

    const handleUserSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, pass);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
        console.log(userGoogle)
        console.error(errorGoogle)
    }

    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Login</h3>
                <form onSubmit={handleUserSignIn}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailOnBlur} type="email" name="email" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassOnBlur} type="Password" name="password" required />
                    </div>
                    <p>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New to Ema-John? <Link className='form-link' to={'/signup'}>Create New Account</Link></p>
                <div className='or-section'>
                    <div className='line-div' />
                    <span className='or'>Or</span>
                    <div className='line-div' />
                </div>
                <div className='google-signin'>
                    <button onClick={handleGoogleSignIn}>Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;