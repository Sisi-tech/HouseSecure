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
            <div className="w-full flex flex-col flex-1 items-center pt-2 text-md">
                <FetchApplicantInfo />
            </div>
            <Footer />
        </div>
    )
};

export default ViewCoverages;