import React, { useState, useEffect } from 'react';
import GetHistoryInfo from './getHistory';

const FetchHistoryInfo = () => {
    const [historyInfo, setHistoryInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistoryInfo = async () => {
            try {
                const userData = localStorage.getItem('user');
                const token = localStorage.getItem('authToken');
                if (!token) {
                    console.error('No authentication token found');
                    return;
                }
                const user = JSON.parse(userData);
                console.log('User id:', user.id);
                if (user) {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/history/${user.id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'applicant/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (!response.ok) {
                        if (response.status === 404) {
                            console.error(`History info not found under user Id: ${user.id}`);
                        } else {
                            console.error(`Error: ${response.status}`);
                        }
                        throw new Error(`Error: ${response.status}`)
                    }
                    const data = await response.json();
                    setHistoryInfo(data);
                }
            } catch (error) {
                console.error('Error fetching history info:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchHistoryInfo()
    }, []);

    return (
        <div>
            {
                loading ? (
                    <p>Loading history info ...</p>
                ) : historyInfo ? (
                    <>
                        <GetHistoryInfo historyItem={historyInfo} />
                    </>
                ) : (
                    <p>No history information found.</p>
                )
            }
        </div>
    )
};

export default FetchHistoryInfo; 