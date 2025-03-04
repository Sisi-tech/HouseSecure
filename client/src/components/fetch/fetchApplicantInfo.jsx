import React, { useState, useEffect } from "react";
import GetApplicantInfoItem from "./getApplicantInfo";

const FetchApplicantInfo = () => {
    const [applicantInfo, setApplicantInfo] = useState(null);
    const [loading, setLoading] = useState(true);

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
    }, []);

    return (
        <div>
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
    )
};

export default FetchApplicantInfo;