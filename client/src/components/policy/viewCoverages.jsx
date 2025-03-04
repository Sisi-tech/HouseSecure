import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../shared/footer";
import Menu from "../shared/menu";
import GetApplicantInfoItem from "../fetch/getApplicantInfo";

const ViewCoverages = () => {
    const [user, setUser] = useState(null);
    const [applicantInfo, setApplicantInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApplicantInfo = async () => {
            try {
                const userData = localStorage.getItem('user');
                const token = localStorage.getItem('authToken');
                if (!token) {
                    console.error('No authentication token found');
                    return;
                }
                const user = JSON.parse(userData);
                console.log("userId", user.id);
                if (user) {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/applicant-info/${user.id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'applicant/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (!response.ok) {
                        if (response.status === 404) {
                            console.error(`Applicant info not found user ID: ${user.id}`);
                        } else {
                            console.error(`Error: ${response.status}`);
                        }
                        throw new Error(`Error: ${response.status}`);
                    }
                    const data = await response.json();
                    setApplicantInfo(data);
                }
            } catch (error) {
                console.error('Error fetching applicant info:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchApplicantInfo();
    }, [user]);

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
                {
                    loading ? (
                        <p>Loading...</p>
                    ) : applicantInfo ? (
                        <>
                        <GetApplicantInfoItem info={applicantInfo} />
                        </>
                    ) : (
                        <p>No applicant information found.</p>
                    )
                }
            </div>
            <Footer />
        </div>
    )
};

export default ViewCoverages;