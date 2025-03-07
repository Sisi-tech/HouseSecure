import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PrintDoc from '../document/downloadFile';
import Footer from '../shared/footer';
import Menu from '../shared/menu';
import backgroundImage from "../../assets/house07.png";

const PolicyDocuments = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
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
        if (user) {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/applicant-info/${user.id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            console.error(`Error: ${response.status}`);
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

  useEffect(() => {
    const checkSession = () => {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData) {
        const currentTime = new Date().getTime();
        const sessionDuration = currentTime - userData.lastActive;
        const oneDayInMillis = 24 * 60 * 60 * 1000;

        if (sessionDuration > oneDayInMillis) {
          localStorage.removeItem('user');
          setUser(null);
          setApplicantInfo(null);
          navigate('/');
        } else {
          userData.lastActive = currentTime;
          localStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
        }
      } else {
        setUser(null);
        setApplicantInfo(null);
      }
    };

    checkSession();
    const intervalId = setInterval(checkSession, 60 * 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Menu isAuthenticated={!!user} handleLogout={handleLogout} />
      <div className="flex flex-col flex-1 justify-center items-center p-4 text-md bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "300px",
          backgroundPosition: "right bottom",
        }}
      >
        <div className='w-full text-center'>
          {user && applicantInfo ? (
            <div className='w-full flex min-w-screen justify-around pt-6 text-center text-sm'>
              <h3 className="text-md text-center font-semibold pt-6">Policy Documents</h3>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold'>Insured's Name</label>
                <p>{user.name}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold'>Policy Type</label>
                <p>{applicantInfo.policyForm}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold'>Effective Date</label>
                <p>{new Date(applicantInfo.selectedDate).toISOString().split('T')[0]}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold'>Download</label>
                <PrintDoc />
              </div>
            </div>
          ) : (
            <p className='font-semibold text-lg'>No user data available.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolicyDocuments;
