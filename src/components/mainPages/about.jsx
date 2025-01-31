import React from "react";
import Navbar from "../pages/navbar";
import professionalImg from "../../assets/professional01.jpg";

const About = () => {
    return (
        <dvi>
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
            <div className="flex flex-col justify-center items-center gap-8 w-full p-8 lg:p-30">
                <div className="flex flex-col lg:flex-row lg:gap-18">
                    <img src={professionalImg} alt="profession" className="w-auto lg:w-200 h-auto"/>
                    <section className="leading-loose space-y-2 pt-10">
                        <h1 className="text-2xl lg:text-3xl font-bold pb-4 lg:pb-8">About Us</h1>
                        <h2 className="text-xl lg:text-2xl font-semibold pb-2 lg:pb-4">Protecting Homes, Securing Futures</h2>
                        <p className="w-full lg:w-4/5">Founded in 2025, HomeSecure was built with a simple yet powerful mission: <span className="font-semibold">to provide homeowners with reliable, affordable, and comprehensive insurance coverage.</span> We understand that a home is more than just a place to live—it's a lifetime investment, a space filled with cherished memories, and a foundation for the future.</p>
                        <p className="w-full lg:w-4/5">With a deep commitment to security, trust, and exceptional customer service, we offer policies tailored to meet the unique needs of homeowners. Whether you're purchasing your first home, safeguarding a family property, or protecting your dream house, <span className="font-semibold">HomeSecure</span> is here to ensure that you're covered in any situation.</p>
                    </section>
                </div>
                <div className="flex flex-col gap-8">
                    <section className="flex flex-col gap-4">
                        <h2 className="text-xl lg:text-2xl font-semibold">Why Choose HomeSecure?</h2>
                        <ul className="list-disc leading-loose pl-5 space-y-2">
                            <li>🏡 <span className="font-semibold">Comprehensive Coverage</span> – From natural disasters to unexpected damages, we’ve got you covered.</li>
                            <li>💰 <span className="font-semibold">Affordable Plans</span> – Flexible pricing options to fit any budget.</li>
                            <li>🤝 <span className="font-semibold">Customer-First Approach</span>– Our dedicated team is always ready to assist with claims, questions, and policy updates.</li>
                            <li>🔒 <span className="font-semibold">Trusted Protection</span> – Secure your home with a company that prioritizes your peace of mind.</li>
                        </ul>
                    </section>
                    <section className="flex flex-col gap-4">
                        <h2 className="text-xl lg:text-2xl font-semibold">Our Promise</h2>
                        <p>At HomeSecure, we believe in protecting what matters most. Our team is committed to making home insurance simple, stress-free, and effective, so you can focus on what truly matters—building a safe and happy home.</p>
                        <p>Your home deserves the best protection. Let’s secure it together.</p>
                        <p className="font-semibold">📍 Get in touch today!</p>
                    </section>
            </div>
            </div>
        </dvi>
    )
}

export default About;