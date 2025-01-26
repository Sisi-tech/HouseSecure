import React from "react";
import Navbar from "./navbar";
import backgroundImage from "../assets/home.jpg";

const Home = () => {
    return (
        <div 
            className="min-h-screen bg-cover bg-center" 
            style={{ backgroundImage: `url(${backgroundImage})`}}
        >
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
        </div>
    )
};

export default Home;