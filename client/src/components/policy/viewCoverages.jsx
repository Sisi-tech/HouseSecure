import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../shared/footer";
import Menu from "../shared/menu";
import FetchApplicantInfo from "../fetch/fetchApplicantInfo";
import FetchLocationInfo from "../fetch/fetchLocation";
import FetchHistoryInfo from "../fetch/fetchHistory";
import FetchCoverageInfo from "../fetch/fetchCoverage";
import FetchInterestInfo from "../fetch/fetchInterest";
import FetchQuestionInfo from "../fetch/fetchQuestion";

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
        <div className="w-full">
            <Menu isAuthenticated={!!user} handleLogout={handleLogout} />
            <div className="w-full flex flex-col flex-1 justify-center items-center pt-2 text-sm shadow-md overflow-hidden ">
                <FetchApplicantInfo />
                <FetchLocationInfo />
                <FetchHistoryInfo />
                <FetchCoverageInfo />
                <FetchInterestInfo />
                <FetchQuestionInfo />
            </div>
            <Footer />
        </div>
    )
};

export default ViewCoverages;