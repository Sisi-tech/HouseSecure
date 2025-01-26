import React from 'react';
import Navbar from './navbar';

const SignUp = () => {
    return (
        <div>
            <Navbar isAuthenticated={true} showLoginSignUp={false} />
            <h1>sign up page</h1>
        </div>
    )
};

export default SignUp;
