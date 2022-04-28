import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const [sendEmailVerification, sending, errorEmailVerification] = useSendEmailVerification(auth);
    const location = useLocation();
    const handleSendVerificationEmail = async () => {
        await sendEmailVerification()
        alert("Email Sent");
    }
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    if (!user.emailVerified) {
        return <div>
            <h2>Your Email is Not Verified!!</h2>
            <h3>To visit further more, kindly verify your email.</h3>
            <button onClick={handleSendVerificationEmail}>Re-send Email</button>
        </div>
    }
    return children;
};

export default RequireAuth;