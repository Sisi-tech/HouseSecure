import React, { useState, useCallback } from 'react';
import Navbar from '../shared/navbar';
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import BackToTop from '../shared/backToTop';
import Footer from '../shared/footer';

const URL = `${import.meta.env.VITE_API_URL}/api/v1/user/register`;

const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const validateForm = () => {
        if (!firstName) {
            setError("First name is required.");
            return false;
        }
        if (!lastName) {
            setError("Last name is required.");
            return false;
        }
        if (!email.includes("@")) {
            setError("Please enter a valid email.");
            return false;
        }
        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return false;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return false;
        }
        if (!/^\d{10}$/.test(phone)) {
            setError("Please enter a valid 10-digit phone number.");
            return false;
        }
        setError("");
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        const requestBody = {
            firstName,
            lastName,
            email,
            password,
            phone,
        };
        try {
            await registerUser(URL, requestBody);
            setSuccessMessage("Account has been successfully created!");
            setTimeout(() => setSuccessMessage(""), 3000); 
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setPhone("");
        } catch (err) {
            console.error("Error during sign-up:", err);
        }
    };

    const handleClose = useCallback((data) => {
        if (data?.user) {
            navigate("/welcome");
        } else {
            navigate("/");
        }
    }, [navigate]);

    const postData = async (url, data) => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!response) {
                throw new Error("Failed to fetch data");
            }
            return await response.json();
        } catch (error) {
            console.error("Error in postData:", error);
            throw error;
        }
    }

    const registerUser = async (URL, requestBody) => {
        try {
            const myData = await postData(URL, requestBody);
            if (myData?.user) {
                localStorage.setItem("user", JSON.stringify(myData.user));
                handleClose(myData);
            }
        } catch (error) {
            console.error("Sign up failed", error);
            throw new Error("Sign up failed");
        }
    };

    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar isAuthenticated={false} showLoginSignUp={true} className="w-full fixed top-0 left-0 z-50" />
            <div className='flex flex-col items-center justify-center w-full mt-14'>
                <div className='w-full max-w-md p-6 bg-white shadow-md rounded-lg'>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <legend className='text-2xl font-bold text-center text-gray-800'>Sign Up</legend>
                        {error && <p className='text-red-500 text-center'>{error}</p>}
                        {successMessage && (
                            <p className="text-green-500 text-center">{successMessage}</p>
                        )}

                        <div className='flex flex-col space-y-1 pl-2'>
                            <label
                                htmlFor="first-name"
                                className="whitespace-nowrap text-gray-800 font-medium"
                            >
                                First Name:
                            </label>
                            <input
                                type="text"
                                id="first-name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className='w-full px-4 py-2 border border-gray-800 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                        <div className='flex flex-col space-y-1 pl-2'>
                            <label
                                htmlFor="last-name"
                                className='whitespace-nowrap text-gray-800 font-medium'
                            >
                                Last Name:
                            </label>
                            <input
                                type="text"
                                id="last-name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className='w-full px-4 py-2 border border-gray-800 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                        <div className='flex flex-col space-y-1 pl-2'>
                            <label
                                htmlFor="email"
                                className='whitespace-nowrap text-gray-800 font-medium'
                            >
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full px-4 py-2 border border-gray-800 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            />
                        </div>
                        <div className='flex flex-col space-y-1 pl-2'>
                            <label
                                htmlFor="password"
                                className='whitespace-nowrap text-gray-800 font-medium'
                            >
                                Password:
                            </label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='w-full px-4 py-2 border border-gray-800 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute inset-y-0 right-2 flex items-center"
                                    aria-label={showPassword ? "Hide Password" : "Show Password"}
                                >
                                    {showPassword ? <EyeOffIcon className='h-5 w-5 text-gray-500' /> : <EyeIcon className='h-5 w-5 text-gray-500' />}
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-1 pl-2'>
                            <label
                                htmlFor="confirm-password"
                                className='whitespace-nowrap text-gray-800 font-medium'
                            >
                                Confirm Password:
                            </label>
                            <div className='relative'>
                                <input
                                    type={showConfirmedPassword ? "text" : "password"}
                                    id="confirm-password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className='w-full px-4 py-2 border border-gray-800 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmedPassword((prev) => !prev)}
                                    className="absolute inset-y-0 right-2 flex items-center"
                                    aria-label={showConfirmedPassword ? "Hide Password" : "Show Password"}
                                >
                                    {showConfirmedPassword ? <EyeOffIcon className='h-5 w-5 text-gray-500' /> : <EyeIcon className='h-5 w-5 text-gray-500' />}
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-1 pl-2'>
                            <label
                                htmlFor="phone"
                                className='whitespace-nowrap text-gray-800 font-medium'
                            >
                                Phone:
                            </label>
                            <input
                                type="phone"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className='w-full px-4 py-2 border border-gray-800 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition">
                            Submit
                        </button>
                        <div className='text-sm text-center text-gray-800'>
                            <p>
                                Already have an account?{" "}
                                <Link to="/logIn" className='text-blue-500 hover:underline'>LogIn here</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <BackToTop />
            <Footer />
        </div>
    );
};

export default SignUp;
