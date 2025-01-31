import React from "react";
import Navbar from "../pages/navbar";
import houseImg from "../../assets/house02.jpg";
import condo from "../../assets/condo.jpg";
import watch from "../../assets/watch.jpg";
import ring from "../../assets/ring02.jpg";

const Insurance = () => {
    return (
        <dvi>
            <Navbar isAuthenticated={false} showLoginSignUp={true} />
            <div className="flex flex-col justify-center items-center gap-6 w-full p-8 text-lg">
                <h1 className="text-2xl lg:text-3xl font-bold pb-4">Homeowner Insurance Programs</h1>
                <p className="text-lg w-4/5 text-center">We offer a variety of <span className="font-semibold">homeowner insurance policies</span> tailored to fit different property types and coverage needs. Whether you own a house, condo, rent an apartment, or personal property, we have the right protection for you.</p>
                <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4">
                    <img 
                        src={houseImg} 
                        alt="houseImg" 
                        className="rounded-2xl shadow-lg transition-transform duration-300 ease-in-out 
                                    hover:scale-105 hover:shadow-2xl border-4 border-gray-200 hover:border-blue-100"
                    />
                    <img 
                        src={condo} 
                        alt="condo" 
                        className="rounded-2xl shadow-lg transition-transform duration-300 ease-in-out 
                                    hover:scale-105 hover:shadow-2xl border-4 border-gray-200 hover:border-blue-100"
                    />
                    <img 
                        src={watch} 
                        alt="watch"
                        className="rounded-2xl shadow-lg transition-transform duration-300 ease-in-out 
                                    hover:scale-105 hover:shadow-2xl border-4 border-gray-200 hover:border-blue-100"
                    />
                    <img 
                        src={ring} 
                        alt="ring" 
                        className="rounded-2xl shadow-lg transition-transform duration-300 ease-in-out 
                                    hover:scale-105 hover:shadow-2xl border-4 border-gray-200 hover:border-blue-100"
                    />
                </div>
                <div className="flex flex-col justify-start gap-8 w-full">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl lg:text-2xl font-semibold">🏡 Homeowner Insurance Policy Types</h2>
                        <ul className="leading-loose pl-5 space-y-2">
                            <li><span>🔹 HO-2 (Broad Form)</span> – Covers your home and personal belongings against named perils such as fire, theft, windstorms, and more.</li>
                            <li><span>🔹 HO-3 (Special Form) </span>– The most common policy, providing comprehensive coverage for your home against all perils except those specifically excluded, while covering personal belongings against named perils.</li>
                            <li><span>🔹 HO-5 (Comprehensive Form) </span>– Offers the highest level of coverage, protecting both your home and personal belongings against all risks, except those explicitly excluded. Ideal for high-value homes.</li>
                            <li><span>🔹 HO-6 (Condo Insurance) </span> – Designed for condo owners, covering personal property, liability, and improvements made inside the unit, while the condominium association covers the building structure.</li>
                            <li><span>🔹 HO-4 (Renters Insurance) </span>– Protects renters by covering personal belongings and liability, though it does not cover the building itself. Landlords typically insure the structure.</li>
                            <li><span>🔹 HO-8 (Older Home Insurance)</span> – Ideal for historic or older homes where replacement costs may exceed market value. It covers repairs based on the home's current value rather than the cost of new materials.</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl lg:text-2xl font-semibold">📌 Additional Coverage Options</h2>
                        <ul className="leading-loose pl-5 space-y-2">
                            <li><span>🔸 Scheduled Personal Property</span>– Provides extra protection for high-value items like jewelry, art, antiques, and electronics beyond standard policy limits.</li>
                            <li><span>🔸 Flood & Earthquake Insurance </span>– Standard policies don’t cover floods or earthquakes, but you can add separate coverage for these natural disasters.</li>
                            <li><span>🔸 Personal Liability Protection</span>– Covers legal expenses and medical bills if someone is injured on your property.</li>
                            <li><span>🔸 Loss of Use Coverage</span>– Helps pay for temporary living expenses if your home becomes uninhabitable due to a covered event.</li>
                            <li><span>🔸 Identity Theft Protection</span>– Assists with recovery expenses if your identity is stolen.</li>
                            <li><span>🔸 Water back up</span></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl lg:text-2xl font-semibold">Get the Right Protection for Your Home</h2>
                        <p>Whether you own a house, condo, or rent an apartment, having the right coverage is essential. Contact us today to explore policy options and customize a plan that fits your needs! 🚪🔑</p>
                    </div>
                </div>
            </div>
        </dvi>
    )
}

export default Insurance;