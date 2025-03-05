import React, { useState, useEffect } from 'react';
import GetQuestionInfo from './getQuestion';

const FetchQuestionInfo = () => {
    const [questionInfo, setQuestionInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuestionInfo = async () => {
            try {
                const userData = localStorage.getItem('user');
                const token = localStorage.getItem('authToken');
                if (!token) {
                    console.error('No authentication token found');
                    return;
                }
                const user = JSON.parse(userData);
                if (user) {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/question/${user.id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'applicant/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (!response.ok) {
                        if (response === 404) {
                            console.error(`Question info not found under user id: ${user.id}`);
                        } else {
                            console.error(`Error: ${response.status}`);
                        }
                        throw new Error(`Error: ${response.status}`);
                    }
                    const data = await response.json();
                    setQuestionInfo(data);
                    console.log("question:", data);
                }
            } catch (error) {
                console.error('Error fetching question info:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchQuestionInfo();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading question info...</p>
            ) : questionInfo.length > 0 ? (
                questionInfo.map(item => (
                    <GetQuestionInfo key={item._id} questionItem={item} />
                ))
            ) : (
                <p>No question information found.</p>
            )}
        </div>
    )
};

export default FetchQuestionInfo;