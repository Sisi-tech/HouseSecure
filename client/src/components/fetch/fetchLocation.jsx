import React, { useState, useEffect } from 'react';
import GetLocationItem from "./getLocation";

const FetchLocationInfo = () => {
    const [locationInfo, setLocationInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLocationInfo = async () => {
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
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/location/${user.id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'applicant/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (!response.ok) {
                        if (response.status === 404) {
                            console.error(`Location info not found under user ID: ${user.id}`);
                        } else {
                            console.error(`Error: ${response.status}`);
                        }
                        throw new Error(`Error: ${response.status}`);
                    }
                    const data = await response.json();
                    setLocationInfo(data);
                }
            } catch (error) {
                console.error('Error fetching location info:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchLocationInfo();
    }, []);

    return (
        <div>
            {
                loading ? (
                    <p>Loading location info ...</p>
                ) : locationInfo ? (
                    <>
                    <GetLocationItem locationItem={locationInfo} />
                    </>
                ) : (
                    <p>No location information found.</p>
                )
            }
        </div>
    )
};

export default FetchLocationInfo;