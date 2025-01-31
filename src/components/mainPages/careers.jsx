import React from "react";
import Navbar from "../pages/navbar";

const Careers = () => {
    return (
        <div>
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
            <h1>Careers</h1>
        </div>
    )
}

export default Careers;