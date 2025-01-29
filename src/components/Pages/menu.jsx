import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import { FaUserCircle, FaPen, FaFileAlt, FaHome, FaCreditCard, FaRegEye } from "react-icons/fa";
import image from "../../assets/house07.png";

export default function Menu({ firstName, lastName }) {
    const [profileImg, setProfileImg] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImg(URL.createObjectURL(file));
        }
    };

    return (
        <div className="relative min-h-screen">
            <Navbar isAuthenticated={true} showLoginSignUp={false} className="w-full fixed top-0 left-0 z-50" />
            <div className="flex w-full">
                <div className="flex flex-col md:pl-8 pt-4 relative z-10">
                    <div className="relative inline-block pl-6">
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
                                <FaUserCircle className="text-sky-100 w-12 h-12 md:w-16 md:h-16" />
                            )}
                        </label>
                        <Link to="/profile">
                            <p className="mt-4 font-semibold text-lg">Sisi Wang</p>
                            <p className="mt-4 font-semibold text-lg">
                                {firstName} {lastName}
                            </p>
                        </Link>
                    </div>
                    <nav className="flex mt-6 bg-sky-100 md:max-w-60 w-screen h-full text-gray-800">
                        <ul className="space-y-8 mt-10 mb-10 font-semibold text-lg">
                            <li className="flex gap-2 md:max-w-60 hover:shadow-lg w-screen p-4">
                                <FaHome size={24} />
                                <Link to="/create-quote">
                                    Get Quote
                                </Link>
                            </li>
                            <li className="flex gap-2 md:max-w-60 hover:shadow-lg w-screen p-4">
                                <FaRegEye size={24} />
                                <Link to="/view-coverages">
                                    View coverages
                                </Link>
                            </li>
                            <li className="flex gap-2 md:max-w-60 hover:shadow-lg w-screen p-4">
                                <FaPen size={24} />
                                <Link to="/change-coverages" >
                                    Change coverages
                                </Link>
                            </li>
                            <li className="flex gap-2 md:max-w-60 hover:shadow-lg w-screen p-4">
                                <FaFileAlt size={24} />
                                <Link to="/policy-documents" >
                                    Policy Documents
                                </Link>
                            </li>
                            <li className="flex gap-2 md:max-w-60 hover:shadow-lg w-screen p-4">
                                <FaCreditCard size={24} />
                                <Link to="/billing-info" >
                                    Billing Info
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-1 justify-center text-2xl text-center">
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