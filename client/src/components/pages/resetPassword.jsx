import React from "react";
import BackToTop from "../shared/backToTop";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";

export default function ResetPassword() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-between">
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
            <div className='flex flex-col items-center justify-center w-full'>
                <h1>Reset Password</h1>
            </div>
            <BackToTop />
            <Footer />
        </div>
    )
}