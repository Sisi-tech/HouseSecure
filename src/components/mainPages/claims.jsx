import React from "react";
import Navbar from "../pages/navbar";
import { Link } from "react-router-dom";
import BackToTop from "../pages/backToTop";
import Footer from "../pages/footer";

const Claims = () => {
    return (
        <div>
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
            <div className="flex flex-col gap-8 w-full p-8 text-lg">
                
                {/* Header Section */}
                <section className="flex flex-col gap-4 text-center max-w-screen-lg mx-auto">
                    <h1 className="text-xl lg:text-2xl font-bold pb-1 lg:pb-2">
                        Claim Center – File & Track Your Claim Easily
                    </h1>
                    <h2 className="text-lg lg:text-xl font-semibold">
                        We're Here to Help You Through the Process
                    </h2>
                    <p className="text-lg">
                        Filing an insurance claim can feel overwhelming, but we're here to make it simple and stress-free. Whether you’ve experienced property damage, theft, or another covered event, follow the steps below to start your claim.
                    </p>
                </section>

                <div className="border-t w-full pt-4"></div> 

                {/* How to File a Claim Section */}
                <section>
                    <h2 className="text-lg lg:text-xl font-semibold pb-6 text-center">📌 How to File a Claim</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-lg mx-auto">
                        {/* Step 1 */}
                        <div className="p-6 bg-gray-100 text-gray-900 shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold">1️⃣ Assess the Situation</h3>
                            <ul className="list-disc leading-loose pl-5 space-y-2">
                                <li>Ensure everyone's safety first. If necessary, contact emergency services.</li>
                                <li>Take photos of any damage for documentation.</li>
                            </ul>
                        </div>
                        {/* Step 2 */}
                        <div className="p-6 bg-gray-100 text-gray-900 shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold">2️⃣ Gather Important Information</h3>
                            <ul className="list-disc leading-loose pl-5 space-y-2">
                                <li>Your policy number</li>
                                <li>Date, time, and location of the incident</li>
                                <li>Description of what happened</li>
                                <li>Contact information of any witnesses (if applicable)</li>
                            </ul>
                        </div>
                        {/* Step 3 */}
                        <div className="p-6 bg-gray-100 text-gray-900 shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold">3️⃣ Submit Your Claim</h3>
                            <ul className="list-disc leading-loose pl-5 space-y-2">
                                <li>Online: Use our <Link to="/submit-claim" className="text-blue-600 font-bold">Claim Submission Form</Link></li>
                                <li>Phone: Call our 24/7 Claim Assistance Line: <span className="font-bold">(888) 888-8888</span></li>
                                <li>Email: Send details to <a href="mailto:claims@homesecure.com" className="text-blue-600">claims@homesecure.com</a></li>
                            </ul>
                        </div>
                        {/* Step 4 */}
                        <div className="p-6 bg-gray-100 text-gray-900 shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold">4️⃣ Claim Review & Processing</h3>
                            <ul className="list-disc leading-loose pl-5 space-y-2">
                                <li>A claims specialist will review your submission.</li>
                                <li>We may request additional information, documents, or inspections.</li>
                            </ul>
                        </div>
                        {/* Step 5 */}
                        <div className="p-6 bg-gray-100 text-gray-900 shadow-md rounded-lg col-span-1 md:col-span-2">
                            <h3 className="text-lg font-semibold">5️⃣ Receive Your Settlement</h3>
                            <ul className="list-disc leading-loose pl-5 space-y-2">
                                <li>Once approved, you'll receive reimbursement based on your policy coverage.</li>
                                <li>We’ll guide you through the next steps for repairs or replacements.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="border-t w-full pt-4"></div> 

                {/* Track Your Claim Section */}
                <section className="flex flex-col gap-6 max-w-screen-lg mx-auto">
                    <h2 className="text-lg lg:text-xl font-semibold pb-2">📝 Track Your Claim Status</h2>
                    <p>
                        Stay updated on your claim’s progress anytime. Log in to your{" "}
                        <Link to="/login" className="text-blue-600 font-bold">account</Link> to check real-time updates, submit additional documents, or contact your claim representative.
                    </p>
                    <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center w-48 mx-auto">
                        Track Your Claim
                    </Link>
                </section>

                <div className="border-t w-full pt-4"></div> 

                {/* Common Claim Types Section */}
                <section className="flex flex-col gap-6 max-w-screen-lg mx-auto">
                    <h2 className="text-lg lg:text-xl font-semibold pb-2">💡 Common Claim Types We Cover</h2>
                    <ul className="list-disc leading-loose pl-5 space-y-2">
                        <li>✔ Property Damage – Fire, storms, water damage</li>
                        <li>✔ Theft & Vandalism – Stolen or damaged belongings</li>
                        <li>✔ Liability Claims – Accidents occurring on your property</li>
                        <li>✔ Loss of Use – Temporary housing assistance if your home becomes uninhabitable</li>
                    </ul>
                </section>

                {/* Contact Assistance */}
                <div className="p-6 border-l-4 border-blue-500 bg-blue-100 text-gray-900 max-w-screen-lg mx-auto mt-4">
                    <p className="font-semibold">📞 Need Assistance? Our support team is ready to help.</p>
                    <p>Call us anytime at <span className="font-bold">(888) 888-8888</span> or visit our FAQ page for quick answers.</p>
                </div>

                <p className="text-center text-lg font-semibold pt-6">🔹 Peace of Mind, When You Need It Most. Let us help you get back on track.</p>
            </div>

            {/* back up top */}
            <BackToTop />
            <Footer />
        </div>
    );
};

export default Claims;
