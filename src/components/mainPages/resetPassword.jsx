import React from "react";
import Navbar from "../pages/navbar";

export default function ResetPassword() {
    return (
        <div>
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
            Reset password
        </div>
    )
}