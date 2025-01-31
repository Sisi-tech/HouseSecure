import React from "react";
import Navbar from "../pages/navbar";
import { Link } from "react-router-dom";

const Claims = () => {
    return (
        <div>
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
            <div className="flex flex-col gap-8 w-full p-8 text-lg">
                <section className="flex flex-col gap-6 text-center max-w-screen-lg mx-auto">
                    <h1 className="text-2xl lg:text-3xl font-bold pb-2">Claim Center – File & Track Your Claim Easily</h1>
                    <h2 className="text-xl lg:text-2xl font-bold pb-2">We're Here to Help You Through the Process</h2>
                    <p className="text-lg">Filing an insurance claim can feel overwhelming, but we're here to make it simple and stress-free. Whether you’ve experienced property damage, theft, or another covered event, follow the steps below to start your claim.</p>
                </section>
                <div className="border-t w-full pt-4"></div> 
                <section>
                    <h2 className="text-xl lg:text-2xl font-bold pb-10 text-center">📌 How to File a Claim</h2>
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 max-w-screen-lg mx-auto">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl lg:text-2xl font-semibold">1️⃣ Assess the Situation</h2>
                            <ul className="list-disc leading-loose pl-5 space-y-2">
                                <li>Ensure everyone's safety first. If necessary, contact emergency services.</li>
                                <li>Take photos of any damage for documentation.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl lg:text-2xl font-semibold">2️⃣ Gather Important Information</h2>
                            <ul className="list-disc leading-loose pl-5 space-y-2">
                                <li>Your policy number</li>
                                <li>Date, time, and location of the incident</li>
                                <li>Description of what happened</li>
                                <li>Contact information of any witnesses (if applicable)</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl lg:text-2xl font-semibold">3️⃣ Submit Your Claim</h2>
                            <ul className="list-disc leading-loose pl-5 space-y-2">
                                <li>Online: Use our [Claim Submission Form] (link)</li>
                                <li>Phone: Call our 24/7 Claim Assistance Line: (888) 888-8888</li>
                                <li>Email: Send details to <email>claims@homesecure.com</email></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl lg:text-2xl font-semibold">4️⃣ Claim Review & Processing</h2>
                            <ul className="list-disc leading-loose pl-5 space-y-2">
                                <li>A claims specialist will review your submission.</li>
                                <li>We may request additional information, documents, or inspections.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl lg:text-2xl font-semibold">5️⃣ Receive Your Settlement</h2>
                            <ul className="list-disc leading-loose pl-5 space-y-2">
                                <li>Once approved, you'll receive reimbursement based on your policy coverage.</li>
                                <li>We’ll guide you through the next steps for repairs or replacements.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="border-t w-full pt-4"></div> 
                <section className="flex flex-col gap-6 max-w-screen-lg mx-auto">
                    <h2 className="text-xl lg:text-2xl font-bold pb-2">📝 Track Your Claim Status</h2>
                    <p>Stay updated on your claim’s progress anytime. Log in to your <Link to="/login" className="font-bold" >account</Link> to check real-time updates, submit additional documents, or contact your claim representative.</p>
                </section>
                <div className="border-t w-full pt-4"></div> 
                <section className="flex flex-col gap-6 max-w-screen-lg mx-auto">
                    <h2 className="text-xl lg:text-2xl font-bold pb-2">💡 Common Claim Types We Cover</h2>
                    <ul className="list-disc leading-loose pl-5 space-y-2">
                        <li>✔ Property Damage – Fire, storms, water damage</li>
                        <li>✔ Theft & Vandalism – Stolen or damaged belongings</li>
                        <li>✔ Liability Claims – Accidents occurring on your property</li>
                        <li>✔ Loss of Use – Temporary housing assistance if your home becomes uninhabitable</li>
                        <li>📞 Need Assistance? Our support team is ready to help. Call us anytime at (888) 888-8888 or visit our FAQ page for quick answers.</li>
                        <li>🔹 Peace of Mind, When You Need It Most. Let us help you get back on track.</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Claims;
