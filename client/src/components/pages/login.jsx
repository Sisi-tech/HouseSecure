import React, { useState, useCallback } from 'react';
import Navbar from '../shared/navbar';
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import BackToTop from '../shared/backToTop';
import Footer from '../shared/footer';

const URL = `${import.meta.env.VITE_API_URL}/api/v1/user/login`;


const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
const isPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [formValid, setFormValid] = useState();

    const handleEmailBlur = () => {
        if (!email || !isEmail(email)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(value && !isPassword(value) ? "Password must include an uppercase, lowercase, number, and be 8+ characters" : "");
    };

    const handleClose = useCallback((data) => {
        if (data?.user) {
            navigate("/welcome");
        } else {
            navigate("/");
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || emailError) {
            setEmailError('Please enter a valid email address');
            return;
        }
        if (!password || passwordError) {
            setPasswordError("Password must meet requirements");
            return;
        }

        setFormValid(null);
        try {
            await loginUser(URL, { email, password });
        } catch (error) {
            setFormValid(error?.message || "Invalid email or password.");
        }
    };
    async function loginUser(URL, requestBody) {
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody),
            });
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
            const data = await response.json();
            if (data?.token) {
                localStorage.setItem("authToken", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                handleClose(data);
            }
        } catch (error) {
            setFormValid(error?.message || "Invalid email or password, login failed.");
        }
    }

    return (
        <div className='w-full min-h-screen flex flex-col justify-between'>
            <Navbar isAuthenticated={false} showLoginSignUp={true} className="w-full fixed top-0 left-0 z-50" />
            <div className='flex flex-col items-center justify-center w-full'>
                <div className='w-full max-w-md p-6 bg-gray-100 shadow-md rounded-lg'>
                    <form onSubmit={handleSubmit} className="space-y-10">
                        <legend className='text-2xl font-bold text-center text-gray-800'>Login</legend>
                        <div className='flex flex-col space-y-5'>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={handleEmailBlur}
                                placeholder='Email' 
                                className='w-full px-4 py-2 border border-gray-800 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                                required
                                autoComplete='email'
                            />
                            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
                            <div className='relative'>
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password" 
                                    className="w-full px-4 py-2 border border-gray-800 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                    value={password}
                                    required
                                    onChange={handlePasswordChange}
                                    autoComplete="current-password"
                                />
                                {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute inset-y-0 right-2 flex items-center"
                                    aria-label={showPassword ? "Hide Password" : "Show Password"}
                                >
                                    {showPassword ? <EyeOffIcon className='h-5 w-5 text-gray-500' /> : <EyeIcon className='h-5 w-5 text-gray-500' />}
                                </button>
                            </div>

                            {formValid && <p className="text-red-500 text-xs">{formValid}</p>}

                            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition">
                                Sign In
                            </button>

                            <div className='text-sm text-center text-gray-800'>
                                <p>Don't have an account?{" "}
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
            <BackToTop />
            <Footer />
        </div>
    );
};

export default Login;
