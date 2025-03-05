import React, { useState, useEffect } from "react";
import { FaPen, FaFileAlt, FaHome, FaCreditCard, FaRegEye, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import LightDarkMode from "./lightDarkMode";

export default function Menu({ isAuthenticated, handleLogout }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="flex flex-col w-full px-3 shadow-md bg-gray-800 text-white">
            {/* Navbar Header */}
            <div className="flex justify-between items-center w-full p-1 pb-2 md:pb-0">
                <Link to="/" className="font-bold text-xl text-sky-700 font-serif" style={{ textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)" }}>
                    HomeSecure
                </Link>

                {/* Hamburger Menu Button (Mobile) */}
                <button className="lg:hidden" onClick={handleToggleMenu}>
                    {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {/* Navigation Links */}
            <nav className={`lg:flex lg:items-center lg:justify-between ${menuOpen ? "block" : "hidden"} w-full ${showDropdown ? "dropdown-open" : ""}`}>
                <ul className="flex flex-col lg:flex-row font-semibold text-md space-y-4 lg:space-y-0 lg:space-x-6 py-2">
                    <li className="flex items-center gap-2 p-4 hover:scale-105 hover:text-sky-800">
                        <FaHome size={18} />
                        <Link to="/quote/applicant-info" onClick={() => setMenuOpen(false)}>Create Quote</Link>
                    </li>
                    <li className="flex items-center gap-2 p-4 hover:scale-105 hover:text-sky-800">
                        <FaRegEye size={18} />
                        <Link to="/view-coverages" onClick={() => setMenuOpen(false)}>View Coverages</Link>
                    </li>
                    <li className="flex items-center gap-2 p-4 hover:scale-105 hover:text-sky-800">
                        <FaPen size={18} />
                        <Link to="/change-coverages" onClick={() => setMenuOpen(false)}>Change Coverages</Link>
                    </li>
                    <li className="flex items-center gap-2 p-4 hover:scale-105 hover:text-sky-800">
                        <FaFileAlt size={18} />
                        <Link to="/policy-documents" onClick={() => setMenuOpen(false)}>Policy Documents</Link>
                    </li>
                    <li className="flex items-center gap-2 p-4 hover:scale-105 hover:text-sky-800">
                        <FaCreditCard size={18} />
                        <Link to="/billing-info" onClick={() => setMenuOpen(false)}>Billing Info</Link>
                    </li>
                </ul>

                {/* Login Icon & Dark Mode Toggle */}
                <div className={`flex items-center gap-4 py-2 ${showDropdown ? "hidden sm:flex" : "flex"} `}>
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
                    <LightDarkMode theme={theme} setTheme={setTheme} />
                </div>
            </nav>
        </div>
    );
}
