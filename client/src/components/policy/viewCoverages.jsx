import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../shared/footer";
import Menu from "../shared/menu";
import FetchApplicantInfo from "../fetch/fetchApplicantInfo";

const ViewCoverages = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);
    
    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/")
    }

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Menu isAuthenticated={!!user} handleLogout={handleLogout} />
            <div className="flex flex-col flex-1 items-center pl-4 pr-4 text-md">
                <h3 className="text-md text-center font-semibold pt-6">View coverages</h3>
                <FetchApplicantInfo />
            </div>
            <Footer />
        </div>
    )
};

export default ViewCoverages;