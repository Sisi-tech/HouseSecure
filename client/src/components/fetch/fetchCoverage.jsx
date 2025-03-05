import React, { useState, useEffect } from 'react';
import GetCoverageItem from './getCoverage';

const FetchCoverageInfo = () => {
    const [coverageInfo, setCoverageInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoverageInfo = async () => {
            try {
                const userData = localStorage.getItem('user');
                const token = localStorage.getItem('authToken');
                if (!token) {
                    console.error('No authentication token found');
                    return;
                }
                const user = JSON.parse(userData);
                console.log("userId:", user.id);
                if (user) {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/coverage/${user.id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'applicant/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (!response.ok) {
                        if (response.status === 404) {
                            console.error(`Coverage info not found under user id: ${user.id}`);
                        } else {
                            console.error(`Error: ${response.status}`);
                        }
                        throw new Error(`Error: ${response.status}`);
                    }
                    const data = await response.json();
                    setCoverageInfo(data);
                }
            } catch (error) {
                console.error('Error fetching coverage info:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchCoverageInfo();
    }, []);

    return (
        <div>
            {
                loading ? (
                    <p>Loading coverage info ...</p>
                ) : coverageInfo ? (
                    <>
                    <GetCoverageItem coverageItem={coverageInfo} />
                    </>
                ) : (
                    <p>No coverage information found.</p>
                )
            }
        </div>
    )
}

export default FetchCoverageInfo;
