import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPen, FaFileAlt, FaHome, FaCreditCard, FaRegEye, FaBars, FaTimes } from "react-icons/fa";


export default function MenuOnly() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex lg:flex-row w-full min-h-full">
                {/* Hamburger button */}
                <button
                    className="absolute top-20 left-6 z-50 lg:hidden"
                    onClick={handleToggleMenu}
                >
                    {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
                </button>

                {/* Menu items */}
                <div
                    className={`fixed left-0 top-1/2 transform -translate-y-1/2 w-full md:w-1/3 lg:w-1/5 bg-sky-100 py-6 px-4 transition-transform duration-300 ${
                        menuOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0`}
                >
                    <nav className="w-full text-gray-800">
                        <ul className="flex flex-col space-y-8 mt-10 mb-10 font-semibold text-lg w-full">
                            <li className="flex gap-2 shadow-md w-full hover:shadow-lg p-4 md:max-w-full">
                                <FaHome size={24} />
                                <Link to="/create-quote" onClick={() => setMenuOpen(false)}>
                                    Get Quote
                                </Link>
                            </li>
                            <li className="flex gap-2 shadow-md w-full hover:shadow-lg p-4 md:max-w-full">
                                <FaRegEye size={24} />
                                <Link to="/view-coverages" onClick={() => setMenuOpen(false)}>
                                    View Coverages
                                </Link>
                            </li>
                            <li className="flex gap-2 shadow-md w-full hover:shadow-lg p-4 md:max-w-full">
                                <FaPen size={24} />
                                <Link to="/change-coverages" onClick={() => setMenuOpen(false)}>
                                    Change Coverages
                                </Link>
                            </li>
                            <li className="flex gap-2 shadow-md w-full hover:shadow-lg p-4 md:max-w-full">
                                <FaFileAlt size={24} />
                                <Link to="/policy-documents" onClick={() => setMenuOpen(false)}>
                                    Policy Documents
                                </Link>
                            </li>
                            <li className="flex gap-2 shadow-md w-full hover:shadow-lg p-4 md:max-w-full">
                                <FaCreditCard size={24} />
                                <Link to="/billing-info" onClick={() => setMenuOpen(false)}>
                                    Billing Info
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
