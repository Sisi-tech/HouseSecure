import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../shared/navbar";
import MenuOnly from "../shared/menuOnly";

const QuoteNav = () => {
    const location = useLocation();

    const navItems = [
        { path: "/quote/applicant-info", label: "Applicant Info" },
        { path: "/quote/location", label: "Location" },
        { path: "/quote/history", label: "History" },
        { path: "/quote/coverage", label: "Coverage" },
        { path: "/quote/interest", label: "Additional Interest" },
        { path: "/quote/question", label: "Underwriting Questions" },
        { path: "/quote/rate", label: "Rate" },
    ]

    return (
        <nav className="w-full pt-4">
            <ul className="flex flex-col w-full lg:flex-row justify-center p-4">
                {navItems.map(({ path, label }) => (
                    <li 
                        key={path} 
                        className={`p-3 lg:px-12 transition-colors duration-200 ${
                            location.pathname === path 
                                ? "bg-gray-400 text-white font-bold" 
                                : "bg-gray-300 hover:bg-gray-400"
                        }`}>
                        <Link to={path} aria-current={location.pathname === path ? "page" : undefined}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const CreateQuote = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 750);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
            { isMobile ? (
                <div 
                    className="flex"
                    onMouseEnter={() => setShowMenu(true)}
                    onMouseLeave={() => setShowMenu(false)}
                >
                    {showMenu ? (
                        <div className="absolute top-0 right-0 z-50">
                            <MenuOnly />
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <QuoteNav />
                        </div>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-5 w-full justify-center">
                    <div className="lg:flex justify-end">
                        <MenuOnly />
                    </div>
                    <div className="col-span-4 flex justify-center">
                        <QuoteNav />
                    </div>
                </div>
            )
            }
        </div>
    );
};

export default CreateQuote;
