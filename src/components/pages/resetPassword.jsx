import React from "react";
import BackToTop from "../shared/backToTop";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";

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