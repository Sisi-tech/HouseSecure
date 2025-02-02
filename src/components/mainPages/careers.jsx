import React from "react";
import Navbar from "../pages/navbar";
import { Link } from "react-router-dom";
import BackToTop from "../pages/backToTop";
import Footer from "../pages/footer";

const Careers = () => {
    return (
        <div>
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
            <div className="flex flex-col gap-8 w-full p-8 text-lg">
                
                {/* Header Section */}
                <section className="flex flex-col gap-4 text-center max-w-screen-lg mx-auto">
                    <h1 className="text-xl lg:text-2xl font-bold pb-1 lg:pb-2">
                        Join Our Team – Build Your Career with Us!
                    </h1>
                    <h2 className="text-lg lg:text-xl font-semibold">
                        We’re Looking for Passionate and Talented Individuals
                    </h2>
                    <p className="text-lg">
                        At HomeSecure, we believe in innovation, collaboration, and making a difference. If you're looking for a career that challenges and inspires you, explore our opportunities below and become part of our mission to protect what matters most.
                    </p>
                </section>

                <div className="border-t w-full pt-4"></div> 

                {/* Open Positions Section */}
                <section>
                    <h2 className="text-lg lg:text-xl font-semibold pb-6 text-center">🚀 Open Positions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-lg mx-auto">
                        {/* Position 1 */}
                        <div className="p-6 bg-gray-100 text-gray-900 shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold">💻 Software Engineer</h3>
                            <p>Work on cutting-edge applications, ensuring secure and scalable solutions for our customers.</p>
                            <p className="font-semibold mt-2">📍 Location: Remote / New York, NY</p>
                            <Link to="/apply/software-engineer" className="bg-blue-600 text-lg text-white px-4 py-2 rounded-lg mt-4 inline-block">
                                Apply Now
                            </Link>
                        </div>
                        {/* Position 2 */}
                        <div className="p-6 bg-gray-100 text-gray-900 shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold">📞 Customer Support Specialist</h3>
                            <p>Help our customers with their claims and ensure a seamless experience.</p>
                            <p className="font-semibold mt-2">📍 Location: Remote / Austin, TX</p>
                            <Link to="/apply/customer-support" className="bg-blue-600 text-white text-lg px-4 py-2 rounded-lg mt-4 inline-block">
                                Apply Now
                            </Link>
                        </div>
                        {/* Position 3 */}
                        <div className="p-6 bg-gray-100 text-gray-900 shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold">📊 Data Analyst</h3>
                            <p>Analyze data to help us improve our products and services.</p>
                            <p className="font-semibold mt-2">📍 Location: Hybrid / San Francisco, CA</p>
                            <Link to="/apply/data-analyst" className="bg-blue-600 text-white text-lg px-4 py-2 rounded-lg mt-4 inline-block">
                                Apply Now
                            </Link>
                        </div>
                        {/* Position 4 */}
                        <div className="p-6 bg-gray-100 text-gray-900 shadow-md rounded-lg">
                            <h3 className="text-lg font-semibold">📢 Marketing Specialist</h3>
                            <p>Develop strategies to engage our customers and expand our reach.</p>
                            <p className="font-semibold mt-2">📍 Location: Remote</p>
                            <Link to="/apply/marketing-specialist" className="bg-blue-600 text-white text-lg px-4 py-2 rounded-lg mt-4 inline-block">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="border-t w-full pt-4"></div> 

                {/* Why Join Us Section */}
                <section className="flex flex-col gap-6 max-w-screen-lg mx-auto">
                    <h2 className="text-lg lg:text-xl font-semibold pb-2 text-center">✨ Why Join HomeSecure?</h2>
                    <ul className="list-disc leading-loose pl-5 space-y-2">
                        <li>✔ Competitive salaries & comprehensive benefits</li>
                        <li>✔ Flexible work arrangements – remote & hybrid options</li>
                        <li>✔ Growth opportunities & mentorship programs</li>
                        <li>✔ Work with a mission-driven team in a collaborative environment</li>
                    </ul>
                </section>

                <div className="border-t w-full pt-4"></div> 

                {/* How to Apply Section */}
                <section className="flex flex-col gap-6 max-w-screen-lg mx-auto">
                    <h2 className="text-lg lg:text-xl font-semibold pb-2">📄 How to Apply</h2>
                    <p>Interested in joining our team? Follow these simple steps:</p>
                    <ol className="list-decimal leading-loose pl-5 space-y-2">
                        <li>Click the "Apply Now" button next to the job you’re interested in.</li>
                        <li>Submit your resume and cover letter.</li>
                        <li>Our team will review your application and contact you for next steps.</li>
                    </ol>
                    <p className="font-semibold">Have questions? Reach out to our hiring team at <a href="mailto:careers@homesecure.com" className="text-blue-600">careers@homesecure.com</a>.</p>
                </section>

                {/* Contact Assistance */}
                <div className="p-6 border-l-4 border-blue-500 bg-blue-100 text-gray-900 max-w-screen-lg mx-auto mt-4">
                    <p className="font-semibold">📞 Need More Information?</p>
                    <p>Call us at <span className="font-bold">(888) 888-8888</span> or visit our FAQ page for details.</p>
                </div>

                <p className="text-center text-lg font-semibold pt-6">🌟 Ready to Make an Impact? Apply Today!</p>
            </div>
            <BackToTop />
            <Footer />
        </div>
    );
};

export default Careers;
