import React, { useState, useEffect } from "react";
import { FaPen, FaFileAlt, FaHome, FaCreditCard, FaRegEye, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import LightDarkMode from "./lightDarkMode";

export default function Menu({ isAuthenticated, handleLogout }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const location = useLocation();

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="flex flex-col w-full px-4 pt-2 shadow-md">
            {/* Navbar Header */}
            <div className="flex justify-between items-center w-full pt-2 pb-2">
                <Link to="/" className="font-bold text-xl md:text-2xl pl-4 text-sky-700 font-serif" style={{ textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)" }}>
                    HomeSecure
                </Link>

                {/* Hamburger Menu Button (Mobile) */}
                <button className="lg:hidden" onClick={handleToggleMenu}>
                    {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
                </button>
            </div>

            {/* Navigation Links */}
            <nav className={`lg:flex lg:items-center lg:justify-between ${menuOpen ? "block" : "hidden"} w-full ${showDropdown ? "dropdown-open" : ""}`}>
                <ul className="flex flex-col lg:flex-row font-semibold text-lg lg:text-xl space-y-4 lg:space-y-0 lg:space-x-6 py-2">
                    <li className="flex items-center gap-2 p-4 hover:scale-105">
                        <FaHome size={20} />
                        <Link to="/quote/applicant-info" onClick={() => setMenuOpen(false)}>Create Quote</Link>
                    </li>
                    <li className="flex items-center gap-2 p-4 hover:scale-105">
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
                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="rounded-full hover:text-blue-500 transition duration-300">
                            <FaUserCircle className="text-sky-600 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                        </Link>
                    )}
                    <LightDarkMode theme={theme} setTheme={setTheme} />
                </div>
            </nav>
        </div>
    );
}
