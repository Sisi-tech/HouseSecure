import React, { useState, useEffect } from 'react';
import GetInterestInfo from './getInterest';

const FetchInterestInfo = () => {
    const [interestInfo, setInterestInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInterestInfo = async () => {
            try {
                const userData = localStorage.getItem('user');
                const token = localStorage.getItem('authToken');
                if (!token) {
                    console.error('No authentication token found');
                    return;
                }
                const user = JSON.parse(userData);
                if (user) {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/interest/${user.id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setInterestInfo(data);
                    } else if (response.status === 404) {
                        // Interest info not found; handle accordingly
                        setInterestInfo(null);
                    } else {
                        console.error(`Error: ${response.status}`);
                    }
                }
            } catch (error) {
                console.error('Error fetching interest info:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchInterestInfo();
    }, []);
    
    return (
        <div className='w-full pl-16 pr-16'>
            {loading ? (
                <p>Loading interest info ...</p>
            ) : interestInfo ? (
                <>
                    <GetInterestInfo interestItem={interestInfo} />
                </>
            ) : (
                <div className='w-full flex flex-col justify-center items-center space-y-2 mb-3 border-b'>
                    <p className='font-semibold p-4 text-center text-sky-800'>No Interest</p>
                </div>
            )
            }
        </div>
    )
};

export default FetchInterestInfo; 