import React from "react";
import Navbar from "../pages/navbar";

const Claims = () => {
    return (
        <div>
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
            <h1>Claims</h1>
        </div>
    )
}

export default Claims;