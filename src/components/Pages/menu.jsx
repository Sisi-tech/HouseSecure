import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { FaPen, FaFileAlt, FaHome, FaCreditCard, FaRegEye } from "react-icons/fa";
import image from "../../assets/house07.png";

export default function Menu() {
    return (
        <div className="relative min-h-screen">
            <Navbar isAuthenticated={true} showLoginSignUp={false} className="w-full fixed top-0 left-0 z-50" />
            <div className="flex w-full">
                <div className="flex flex-col md:pl-8 pt-4 relative z-10">
                    <nav className="flex justify-center mt-6 bg-sky-100 md:max-w-62 w-screen h-full text-gray-800">
                        <ul className="space-y-8 mt-10 mb-10 font-semibold text-lg">
                            <li className="flex gap-2 md:border md:max-w-60 hover:shadow-lg w-screen p-4">
                                <FaHome size={24} />
                                <Link to="/create-quote">
                                    Get Quote
                                </Link>
                            </li>
                            <li className="flex gap-2 md:border md:max-w-60 hover:shadow-lg w-screen p-4">
                                <FaRegEye size={24} />
                                <Link to="/view-coverages">
                                    View coverages
                                </Link>
                            </li>
                            <li className="flex gap-2 md:border md:max-w-60 hover:shadow-lg w-screen p-4">
                                <FaPen size={24} />
                                <Link to="/change-coverages" >
                                    Change coverages
                                </Link>
                            </li>
                            <li className="flex gap-2 md:border md:max-w-60 hover:shadow-lg w-screen p-4">
                                <FaFileAlt size={24} />
                                <Link to="/policy-documents" >
                                    Policy Documents
                                </Link>
                            </li>
                            <li className="flex gap-2 md:border md:max-w-60 hover:shadow-lg w-screen p-4">
                                <FaCreditCard size={24} />
                                <Link to="/billing-info" >
                                    Billing Info
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-1 justify-center text-2xl text-center z-0">
                    <div className="leading-[4rem]">
                        <p className="font-semibold">Welcome Sisi Wang!</p>
                        <p>Protect Your Home, Keep Your Family Happy.</p>
                        {/* <p>Welcome {firstName} {lastName}!</p> */}
                    </div>
                </div>
            </div>
            <div 
                style={{ backgroundImage: `url(${image})` }}
                className="absolute bottom-2 right-0 w-2/3 h-50 bg-no-repeat bg-contain bg-right opacity-80 z-0
                            md:w-1/3 md:h-2/5"
            ></div>

        </div>
    )
};