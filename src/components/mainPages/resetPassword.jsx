import React from "react";
import BackToTop from "../pages/backToTop";
import Footer from "../pages/footer";
import Navbar from "../pages/navbar";

export default function ResetPassword() {
    return (
        <div>
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
            Reset password
            <BackToTop />
            <Footer />
        </div>
    )
}