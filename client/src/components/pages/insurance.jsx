import React from "react";
import Navbar from "../shared/navbar";
import houseImg from "../../assets/house02.jpg";
import condo from "../../assets/condo.jpg";
import watch from "../../assets/watch.jpg";
import ring from "../../assets/ring02.jpg";
import BackToTop from "../shared/backToTop";
import Footer from "../shared/footer";

const Insurance = () => {
    return (
        <div>
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
            <div className="flex flex-col items-center w-full p-8 text-md">
                {/* Title */}
                <h1 className="text-lg font-bold pb-4 text-center">Homeowner Insurance Programs</h1>

                {/* Description */}
                <p className="text-md w-4/5 text-center mb-6">
                    We offer a variety of <span className="font-semibold">homeowner insurance policies</span> tailored to fit different property types and coverage needs. 
                    Whether you own a house, condo, rent an apartment, or personal property, we have the right protection for you.
                </p>

                {/* Image Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl">
                    {[houseImg, condo, watch, ring].map((img, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={img}
                                alt="insurance"
                                className="w-full h-52 object-cover rounded-2xl shadow-lg transition-transform duration-300 ease-in-out 
                                        hover:scale-105 hover:shadow-2xl border-4 border-gray-200 hover:border-blue-100"
                            />
                        </div>
                    ))}
                </div>

                {/* Insurance Policy Types */}
                <div className="grid grid-cols-1 text-black md:grid-cols-2 gap-8 w-full lg:max-w-6xl mt-10">
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                        <h2 className="text-lg font-semibold mb-3">🏡 Homeowner Insurance Policy Types</h2>
                        <ul className="leading-loose pl-5 space-y-2">
                            <li><span>🔹 HO-2 (Broad Form)</span> – Covers your home and personal belongings against specific perils like fire, theft, and windstorms.</li>
                            <li><span>🔹 HO-3 (Special Form)</span> – Comprehensive coverage for your home against all perils except those excluded.</li>
                            <li><span>🔹 HO-5 (Comprehensive Form)</span> – Highest level of coverage, protecting home and belongings.</li>
                            <li><span>🔹 HO-6 (Condo Insurance)</span> – Covers personal property, liability, and interior improvements.</li>
                            <li><span>🔹 HO-4 (Renters Insurance)</span> – Protects personal belongings for renters.</li>
                            <li><span>🔹 HO-8 (Older Home Insurance)</span> – Designed for historic or older homes.</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                        <h2 className="text-lg font-semibold mb-3">📌 Additional Coverage Options</h2>
                        <ul className="leading-loose pl-5 space-y-2">
                            <li><span>🔸 Scheduled Personal Property</span> – Extra protection for jewelry, antiques, and valuables.</li>
                            <li><span>🔸 Flood & Earthquake Insurance</span> – Optional coverage for these natural disasters.</li>
                            <li><span>🔸 Personal Liability Protection</span> – Covers legal and medical expenses.</li>
                            <li><span>🔸 Loss of Use Coverage</span> – Pays for temporary living expenses if your home is uninhabitable.</li>
                            <li><span>🔸 Identity Theft Protection</span> – Helps with recovery expenses in case of identity theft.</li>
                        </ul>
                    </div>
                </div>

                {/* Final Call to Action */}
                <div className="mt-10 text-center max-w-2xl">
                    <h2 className="text-md font-semibold">Get the Right Protection for Your Home</h2>
                    <p className="mt-2">
                        Whether you own a house, condo, or rent an apartment, having the right coverage is essential. Contact us today to explore policy options and customize a plan that fits your needs! 🚪🔑
                    </p>
                </div>
            </div>
            <BackToTop />
            <Footer />
        </div>
    );
};

export default Insurance;
