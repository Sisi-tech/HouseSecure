import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LightDarkMode from './lightDarkMode';
import "../index.css";

const Navbar = ({ isAuthenticated, showLoginSignUp }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const location = useLocation();

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className='min-w-min flex justify-between items-center p-4 bg-gray-100 shadow' data-theme={theme}>
                <ul className='flex gap-2 md:gap-4 items-center'>
                    <li className='font-bold text-2xl  md:text-2xl lg:text-3xl' style={{ textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)" }}>
                        <Link to="/">HomeSecure</Link>
                    </li>
                    <li className='md:text-xl lg:text-2xl invisible md:visible'>Insurance</li>
                </ul>
                <div className='flex gap-2 md:gap-6 items-center'>
                    <LightDarkMode theme={theme} setTheme={setTheme} />
                    <ul className='flex gap-2 md:gap-4'>
                        {isAuthenticated && location.pathname !== "/signUp" && location.pathname === "/logIn" ? (
                            <li>
                                <Link to="/" className='px-4 py-2 rounded-full shadow-md  hover:text-blue-500 transition duration-300'>Log Out</Link>
                            </li>
                        ) : showLoginSignUp && location.pathname !== "/signUp" ? (
                            <>
                                <li>
                                    <Link to="/login" className='px-4 py-2 rounded-full shadow-md  hover:text-blue-500 transition duration-300'>Login</Link>
                                </li>
                                <li>
                                    <Link to="/signUp" className='px-4 py-2 rounded-full shadow-md hover:text-blue-500 transition duration-300'>SignUp</Link>
                                </li>
                            </>
                        ) : null}
                    </ul>
                </div>
        </div>
    )
}

export default Navbar;