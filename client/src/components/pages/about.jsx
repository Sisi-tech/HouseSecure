import React, { useState } from "react";
import Navbar from "../shared/navbar";
import professionalImg from "../../assets/professional01.jpg";
import professionalImg02 from "../../assets/professional02.jpg";
import professionalImg03 from "../../assets/professional03.jpg";
import BackToTop from "../shared/backToTop";
import Footer from "../shared/footer";

const About = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [professionalImg, professionalImg02, professionalImg03];

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return (
        <div className="flex flex-col w-full">
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
            <div className="flex flex-col justify-center items-center gap-8 w-full p-8 lg:p-30">
                <div className="flex flex-col lg:flex-row flex-wrap gap-6 justify-center items-center lg:items-start container mx-auto">
                    <div className="relative w-full sm:w-3/4 md:w-1/2 lg:max-w-[50%] h-auto">
                        <button 
                            onClick={handlePrevImage}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black pl-2 pr-2 rounded-full z-20 hover:bg-gray-100"
                        >
                            &lt;&lt;
                        </button>
                        <img 
                            src={images[currentImageIndex]}
                            alt="profession"
                            className="w-full h-auto object-cover rounded-lg shadow-md lg:pt-10"
                        />
                        <button 
                            onClick={handleNextImage}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2  text-black pl-2 pr-2 rounded-full z-20 hover:bg-gray-100"
                        >
                            &gt;&gt;
                        </button>
                    </div>

                    <section className="flex-1 leading-loose space-y-4 text-center lg:text-left">
                        <h1 className="text-lg font-bold pb-1 lg:pb-4">About Us</h1>
                        <h2 className="text-md font-semibold">Protecting Homes, Securing Futures</h2>
                        <p className="leading-relaxed">Founded in 2025, HomeSecure was built with a simple yet powerful mission: <span className="font-semibold">to provide homeowners with reliable, affordable, and comprehensive insurance coverage.</span> We understand that a home is more than just a place to live—it's a lifetime investment, a space filled with cherished memories, and a foundation for the future.</p>
                        <p className="leading-relaxed">With a deep commitment to security, trust, and exceptional customer service, we offer policies tailored to meet the unique needs of homeowners. Whether you're purchasing your first home, safeguarding a family property, or protecting your dream house, <span className="font-semibold">HomeSecure</span> is here to ensure that you're covered in any situation.</p>
                    </section>
                </div>
                <div className="flex flex-col gap-8">
                    <section className="flex flex-col gap-4">
                        <h2 className="text-md font-semibold">Why Choose HomeSecure?</h2>
                        <ul className="list-disc leading-loose pl-5 space-y-2">
                            <li>🏡 <span className="font-semibold">Comprehensive Coverage</span> – From natural disasters to unexpected damages, we’ve got you covered.</li>
                            <li>💰 <span className="font-semibold">Affordable Plans</span> – Flexible pricing options to fit any budget.</li>
                            <li>🤝 <span className="font-semibold">Customer-First Approach</span>– Our dedicated team is always ready to assist with claims, questions, and policy updates.</li>
                            <li>🔒 <span className="font-semibold">Trusted Protection</span> – Secure your home with a company that prioritizes your peace of mind.</li>
                        </ul>
                    </section>
                    <section className="flex flex-col gap-4">
                        <h2 className="text-md font-semibold">Our Promise</h2>
                        <p className="leading-relaxed">At HomeSecure, we believe in protecting what matters most. Our team is committed to making home insurance simple, stress-free, and effective, so you can focus on what truly matters—building a safe and happy home.</p>
                        <p className="leading-relaxed">Your home deserves the best protection. Let’s secure it together.</p>
                        <p className="font-semibold hover:text-blue-800">
                            <a href="mailto:info@homesecure.com" target="_blank" rel="noopener noreferrer">
                                📍 Get in touch today!
                            </a>
                        </p>
                    </section>
                </div>
            </div>
            <BackToTop />
            <Footer />
        </div>
    )
}

export default About;
