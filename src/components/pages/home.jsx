import React from "react";
import Navbar from "../shared/navbar";
import backgroundImage from "../../assets/home.jpg";
import Footer from "../shared/footer";

const Home = () => {
    return (
        <div 
            className="flex flex-col min-h-screen bg-cover bg-center" 
            style={{ 
                    backgroundImage: `url(${backgroundImage})`, 
                    height: '120vh'
                }}
        >
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
            <div className="flex-grow"></div>
            <Footer className="absolute bottom-0 w-full" />
        </div>
    )
};

export default Home;