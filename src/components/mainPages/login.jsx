import React, { useState } from 'react';
import Navbar from '../pages/navbar';
import { Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { FaUserCircle } from "react-icons/fa";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (e.target.validity.valid) {
            setEmailError("");
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            setEmailError('Please enter a valid email address');
        }
    }

    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar isAuthenticated={true} showLoginSignUp={false} className="w-full fixed top-0 left-0 z-50" />
            <div className='flex flex-col items-center justify-center w-full mt-20 sm:mt-28 md:mt-32 lg:mt-36'>
                <div className='w-full max-w-md p-6 bg-white shadow-md rounded-lg'>
                    <form onSubmit={handleSubmit} className="space-y-10">
                        <legend className='text-2xl font-bold text-center text-gray-800'>Login</legend>
                        <div className='flex flex-col space-y-10'>
                            <input 
                                type="email" 
                                value={email}
                                onChange={handleEmailChange}
                                placeholder='Email' 
                                className='w-full px-4 py-2 border border-gray-800 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                                required
                                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,)$"
                            />
                            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
                            <div className='relative'>
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password" 
                                    className="w-full px-4 py-2 border border-gray-800 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <button 
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-2 flex items-center"
                                    aria-label={showPassword ? "Hide Password" : "Show Password"}
                                >
                                    {showPassword ? (
                                        <EyeOffIcon className='h-5 w-5 text-gray-500' />
                                    ): (
                                        <EyeIcon className='h-5 w-5 text-gray-500' />
                                    )}
                                </button>
                            </div>
                            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition">Sign In</button>
                            <div className='text-sm text-center text-gray-800'>
                                <p>
                                    Don't have an account?{" "}
                                    <Link to="/signUp" className='text-blue-500 hover:underline'>Sign Up</Link>
                                </p>
                                <p>
                                    <Link to="/resetPassword" className='text-blue-500 hover:underline'>Forgot your password?</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;
