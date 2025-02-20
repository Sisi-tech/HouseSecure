import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import LightDarkMode from './lightDarkMode';
import "../../index.css";

const Navbar = ({ isAuthenticated, handleLogout }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

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
        <div className='min-w-min flex justify-between items-center p-2 bg-gray-100 shadow' data-theme={theme}>
            <div className='flex items-center text-sky-700 font-serif'>
                <Link 
                    to="/" 
                    className='font-bold text-xl pl-4' 
                    style={{ textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)" }}
                >
                    HomeSecure
                </Link>
            </div>
            <nav className='flex gap-4 items-center pr-1 md:pr-2'>
                <ul className='hidden lg:flex gap-2 md:gap-14 text-lg font-semibold'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/insurance">Insurance</Link></li>
                    <li><Link to="/claims">Claims</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <LightDarkMode theme={theme} setTheme={setTheme} />
                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="text-md px-4 py-1.5 rounded-md hover:shadow-md"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="rounded-full hover:text-blue-500 transition duration-300">
                            <FaUserCircle className="text-sky-600 w-8 h-8 md:w-10 md:h-10" />
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;