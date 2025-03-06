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

  useEffect(() => {
    // Function to check session expiration
    const checkSession = () => {
      const userData = JSON.parse(localStorage.getItem('user'));
      const applicantInfoData = JSON.parse(localStorage.getItem('applicantInfo'));
      if (userData) {
        const currentTime = new Date().getTime();
        const sessionDuration = currentTime - userData.lastActive;
        const oneDayInMillis = 24 * 60 * 60 * 1000;

        if (sessionDuration > oneDayInMillis) {
          // Session expired, log out the user
          localStorage.removeItem('user');
          setUser(null);
          setApplicantInfo(null);
          navigate('/');
        } else {
          // Update last active time
          userData.lastActive = currentTime;
          localStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
          setApplicantInfo(applicantInfoData);
        }
      } else {
        setUser(null);
        setApplicantInfo(null);
      }
    };

    // Check session on component mount
    checkSession();

    // Set up an interval to check session every minute
    const intervalId = setInterval(checkSession, 60 * 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Menu isAuthenticated={!!user} handleLogout={handleLogout} />
      <div className="flex flex-col flex-1 items-center p-4 text-md bg-no-repeat"
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "300px",
            backgroundPosition: "right bottom",
        }}
      >
        <h3 className="text-md text-center font-semibold pt-6">Policy Documents</h3>
        <div>
          {user ? (
            <div className='w-full flex min-w-screen justify-around pt-6 text-center text-sm'>
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
                <p>{applicantInfo.selectedDate}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold'>Download</label>
                <PrintDoc />
              </div>
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PolicyDocuments;
