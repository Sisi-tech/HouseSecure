import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../shared/menu";

const CreateQuote = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    };

    return (
        <div className="w-full">
            <Menu isAuthenticated={!!user} handleLogout={handleLogout}  />
            <div className="left-0 w-full md:w-screen mb-2 p-4 text-md font-semibold">
                <ul className="flex flex-col lg:flex-row justify-center gap-3.5 text-black">
                    {[
                        { path: "/quote/applicant-info", label: "Applicant Info" },
                        { path: "/quote/location", label: "Location" },
                        { path: "/quote/history", label: "History" },
                        { path: "/quote/coverage", label: "Coverage" },
                        { path: "/quote/interest", label: "Additional Interest" },
                        { path: "/quote/question", label: "Underwriting Questions" },
                        { path: "/quote/rate", label: "Rate" }
                    ].map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`block px-4 py-2 hover:bg-gray-300
                                    ${location.pathname === item.path ? "bg-gray-500 text-white" : "bg-gray-200"}`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CreateQuote;
