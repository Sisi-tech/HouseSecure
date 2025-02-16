import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackToTop from "../shared/backToTop";
import Footer from "../shared/footer";
import Menu from "../shared/menu";
import backgroundImage from "../../assets/house04.png";

const Welcome = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    return (
        <div className='w-full min-h-screen flex flex-col justify-between'>
            <Menu isAuthenticated={!!user} handleLogout={handleLogout} />
            <div
                className='flex justify-center w-full min-h-screen bg-no-repeat bg-contain bg-right'
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="w-4/5 md:w-3/5 h-auto md:h-3/5 flex flex-col items-center gap-6 mt-20 p-10 rounded-lg shadow-lg">
                    <h1 className="text-xl">Welcome to <span className="font-semibold text-blue-600">HomeSecure</span> {user ? `${user.firstName} ${user.lastName}` : ""}!</h1>
                    <p className="text-lg">
                        We're glad to have you here. Let's work together to make our homes protected, safe, and full of happiness.
                    </p>
                    <p className="text-lg">
                        Your security is our priority. Explore your coverages, manage your policies, and stay informed with HomeSecure.
                    </p>
                </div>
            </div>
            <BackToTop />
            <Footer />
        </div>
    )
}

export default Welcome;