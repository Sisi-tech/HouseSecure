import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackToTop from "../shared/backToTop";
import Footer from "../shared/footer";
import Menu from "../shared/menu";
import backgroundImage from "../../assets/house05.png";

const Welcome = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "null");
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    return (
        <div className='w-full min-h-screen flex flex-col justify-between'>
            <Menu isAuthenticated={!!user} handleLogout={handleLogout} />
            <div
                className='flex justify-center w-full min-h-screen bg-no-repeat'
                style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "600px",
                    backgroundPosition: "right bottom"
                }}
            >
                <div className="w-4/5 md:w-3/5 h-full flex flex-col gap-2 pt-1 pl-6 pr-6 rounded-lg">
                    <div className="flex justify-center">
                        <img
                            src="https://media.giphy.com/media/Wj7lNjMNDxSmc/giphy.gif"
                            alt="Excited Dog GIF"
                            className="w-40 h-auto rounded-[100%]"
                        />
                    </div>
                    <div 
                        className="text-center text-md"
                    >
                        <h1 className="font-semibold pb-2">Welcome to <span className="font-semibold text-blue-600">HomeSecure</span> {user ? `${user?.firstName || ""} ${user?.lastName || ""}` : ""}!</h1>
                        <p>
                            We're glad to have you here. Let's work together to make our homes protected, safe, and full of happiness.
                        </p>
                        <p>
                            Your security is our priority. Explore your coverages, manage your policies, and stay informed with HomeSecure.
                        </p>
                    </div>
                </div>
            </div>
            <BackToTop />
            <Footer />
        </div>
    )
}

export default Welcome;