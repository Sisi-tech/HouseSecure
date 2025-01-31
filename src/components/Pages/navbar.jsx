import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import LightDarkMode from './lightDarkMode';
import "../../index.css";

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
            <div className='flex gap-2 md:gap-4 items-center'>
                <Link 
                    to="/" 
                    className='font-bold text-2xl  md:text-2xl lg:text-3xl' 
                    style={{ textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)" }}
                >
                    HomeSecure
                </Link>
            </div>
            <nav className='flex gap-4 md:gap-8 items-center pr-1 md:pr-2'>
                <ul className='hidden lg:flex gap-2 md:gap-20 text-xl font-semibold'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/insurance">Insurance</Link></li>
                    <li><Link to="/claims">Claims</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <LightDarkMode theme={theme} setTheme={setTheme} />
                    {isAuthenticated ? (
                        <Link to="/" className='rounded-full hover:text-blue-500 transition duration-300'>
                            <FaUserCircle className="text-sky-100 w-12 h-12 md:w-14 md:h-14" />
                        </Link>
                    ) : showLoginSignUp ? (
                        <Link to="/login" className='rounded-full hover:text-blue-500 transition duration-300'>
                            <FaUserCircle className="text-sky-100 w-12 h-12 md:w-14 md:h-14" />
                        </Link>
                    ) : null}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;