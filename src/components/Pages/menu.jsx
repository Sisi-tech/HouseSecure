import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import { FaUserCircle } from "react-icons/fa";

export default function Menu({ firstName, lastName }) {
    const [profileImg, setProfileImg] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImg(URL.createObjectURL(file));
        }
    };

    return (
        <div className="space-y-6">
            <Navbar isAuthenticated={true} showLoginSignUp={false} className="w-full fixed top-0 left-0 z-50" />
            <div className="flex flex-col pl-8 pt-4">
                <div className="relative inline-block">
                    <label className="cursor-pointer">
                        <input 
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="absolute opacity-0 w-12 h-12 md:w-16 md:h-16 cursor-pointer"
                            style={{ zIndex: 10 }}
                        />
                        {profileImg ? (
                            <img 
                                src={profileImg}
                                alt="profile"
                                className="rounded-full shadow-md w-12 h-12 md:w-16 md:h-16 object-cover"
                            />
                        ) : (
                            <FaUserCircle className="text-gray-500 w-12 h-12 md:w-16 md:h-16" />
                        )}
                    </label>
                    <Link to="/profile">
                        <p className="mt-4 font-semibold text-lg">Sisi Wang</p>
                        <p className="mt-4 font-semibold text-lg">
                            {firstName} {lastName}
                        </p>
                    </Link>
                </div>
                <nav className="flex mt-6 bg-gray-200 max-w-50 h-screen">
                    <ul className="space-y-4 p-4 font-semibold">
                        <li>
                            <Link to="/create-quote" className="hover:underline">
                                Get Quote
                            </Link>
                        </li>
                        <li>
                            <Link to="/view-coverages" className="hover:underline">
                                View coverages
                            </Link>
                        </li>
                        <li>
                            <Link to="/change-coverages" className="hover:underline">
                                Change coverages
                            </Link>
                        </li>
                        <li>
                            <Link to="/policy-documents" className="hover:underline">
                                Policy Documents
                            </Link>
                        </li>
                        <li>
                            <Link to="/billing-info" className="hover:underline">
                                Billing Info
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};