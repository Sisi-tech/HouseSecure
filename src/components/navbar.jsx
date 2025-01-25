import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LightDarkMode from './lightDarkMode';
import "../index.css";

const Navbar = () => {
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
        <div className='min-w-min flex justify-between items-center p-4 bg-gray-100 shadow' data-theme={theme}>
                <ul className='flex gap-4 items-center'>
                    <li className='font-bold text-xl'>HomeSecure</li>
                    <li>Insurance</li>
                </ul>
                <div className='flex gap-6 items-center'>
                    <LightDarkMode theme={theme} setTheme={setTheme} />
                    <ul className='flex gap-4'>
                        <li>
                            <Link to="/login" className='hover:text-blue-600'>Login</Link>
                        </li>
                        <li>
                            <Link to="/signUp" className='hover:text-blue-600'>SignUp</Link>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default Navbar;