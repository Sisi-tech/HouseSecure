import React, { useState, useEffect } from "react";
import { FaPen, FaFileAlt, FaHome, FaCreditCard, FaRegEye, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import LightDarkMode from "./lightDarkMode";

export default function Menu({ isAuthenticated }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
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

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <div className="flex flex-col w-full px-4 py-2 shadow-md bg-white">
            {/* Navbar Header */}
            <div className="flex justify-between items-center w-full">
                <Link to="/" className="font-bold text-xl md:text-2xl pl-4">
                    HomeSecure
                </Link>

                {/* Hamburger Menu Button (Mobile) */}
                <button className="lg:hidden" onClick={handleToggleMenu}>
                    {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
                </button>
            </div>

            {/* Navigation Links */}
            <nav className={`lg:flex lg:items-center lg:justify-between ${menuOpen ? "block" : "hidden"} w-full ${showDropdown ? "dropdown-open" : ""}`}>
                <ul className="flex flex-col lg:flex-row font-semibold text-lg space-y-4 lg:space-y-0 lg:space-x-6 py-4">
                    <li className="relative flex flex-col">
                        <button className="flex items-center gap-2 p-4 hover:scale-105 "
                            onClick={toggleDropdown}
                        >
                            <FaHome size={20} />
                            Get Quote
                        </button>
                        {showDropdown && (
                            <div className="absolute left-0 w-full md:w-screen mt-10 md:mt-26 p-4 ">
                                <ul className="flex flex-col md:flex-row justify-center bg-white gap-4">
                                    <li><Link to="/quote/applicant-info" className="block px-4 py-2 bg-gray-100 hover:bg-gray-200" onClick={() => setShowDropdown(false)}>Applicant Info</Link></li>
                                    <li><Link to="/quote/location" className="block px-4 py-2 bg-gray-100 hover:bg-gray-200">Location</Link></li>
                                    <li><Link to="/quote/history" className="block px-4 py-2 bg-gray-100 hover:bg-gray-200">History</Link></li>
                                    <li><Link to="/quote/coverage" className="block px-4 py-2 bg-gray-100 hover:bg-gray-200">Coverage</Link></li>
                                    <li><Link to="/quote/interest" className="block px-4 py-2 bg-gray-100 hover:bg-gray-200">Additional Interest</Link></li>
                                    <li><Link to="/quote/question" className="block px-4 py-2 bg-gray-100 hover:bg-gray-200">Underwriting Questions</Link></li>
                                    <li><Link to="/quote/rate" className="block px-4 py-2 bg-gray-100 hover:bg-gray-200">Rate</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className={`flex items-center gap-2 p-4 hover:scale-105 ${menuOpen ? "block" : "hidden"} `}>
                        <FaRegEye size={20} />
                        <Link to="/view-coverages" onClick={() => setMenuOpen(false)}>View Coverages</Link>
                    </li>
                    <li className="flex items-center gap-2 p-4 hover:scale-105">
                        <FaPen size={20} />
                        <Link to="/change-coverages" onClick={() => setMenuOpen(false)}>Change Coverages</Link>
                    </li>
                    <li className="flex items-center gap-2 p-4 hover:scale-105">
                        <FaFileAlt size={20} />
                        <Link to="/policy-documents" onClick={() => setMenuOpen(false)}>Policy Documents</Link>
                    </li>
                    <li className="flex items-center gap-2 p-4 hover:scale-105">
                        <FaCreditCard size={20} />
                        <Link to="/billing-info" onClick={() => setMenuOpen(false)}>Billing Info</Link>
                    </li>
                </ul>

                {/* Login Icon & Dark Mode Toggle */}
                <div className={`flex items-center gap-4 py-2 ${showDropdown ? "hidden sm:flex" : "flex"} `}>
                    <Link to={isAuthenticated ? "/" : "/login"} className="rounded-full hover:text-blue-500 transition duration-300">
                        <FaUserCircle className="text-sky-600 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                    </Link>
                    <LightDarkMode theme={theme} setTheme={setTheme} />
                </div>
            </nav>
        </div>
    );
}
