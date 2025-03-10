import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreateQuote from "../policy/createQuote";
import Footer from "../shared/footer";
import BackToTop from "../shared/backToTop";

const ApplicantInfo = () => {
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const todayString = getTodayDate();

    const [formData, setFormData] = useState({
        selectedDate: todayString || "",
        entityType: "",
        firstName: "",
        lastName: "",
        partnership: "",
        jointVenture: "",
        policyForm: "",
        occupancyType: "",
        llc: "",
        corporation: "",
        trust: "",
        lossHistory: "",
    })


    console.log("selected date:", formData.selectedDate);
   
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("applicantInfo")) || {};
        setFormData(prevData => ({
            ...prevData,
            ...savedData,
        }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;
        
        const updatedData = { 
            ...formData, 
            [name]: formattedValue,
        };
    
        setFormData(updatedData);
        localStorage.setItem("applicantInfo", JSON.stringify(updatedData));
    };
    

    const isFormValid = () => {
        if (!formData.entityType || !formData.policyForm || !formData.occupancyType || !formData.lossHistory) return false;
        if (formData.entityType === "individual" && (!formData.firstName || !formData.lastName)) return false;
        if (formData.entityType !== "individual" && !formData.businessName) return false;
        return true;
    };

    return (
        <div className="w-full min-h-screen flex flex-col">
            <CreateQuote />
            <div className="w-full pl-4 pr-4 flex flex-col justify-center items-center">
                <h3 className="text-md font-semibold text-center pb-4">Applicant Info</h3>
                <form className="w-full md:max-w-screen-lg flex flex-col gap-4 p-4 text-md text-black bg-gray-100" >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="date" className="w-auto md:w-160 lg:w-240 text-start md:text-right">Proposed Effective Date:</label>
                        <input
                            id="date"
                            type="date"
                            name="selectedDate"
                            className="p-1 pl-2 border rounded-sm w-auto md:w-100 lg:w-200"
                            value={formData.selectedDate}
                            min={todayString}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="entityType" className="w-auto md:w-160 lg:w-240 text-start md:text-right">Entity Type:</label>
                        <select
                            id="entityType"
                            name="entityType"
                            className="p-2 border rounded-sm w-auto md:w-100 lg:w-200"
                            value={formData.entityType}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Required</option>
                            <option value="individual">Individual</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Joint Venture">Joint Venture</option>
                            <option value="Limited Liability Corporation">Limited Liability Corporation (LLC)</option>
                            <option value="corporation">Corporation</option>
                            <option value="trust">Trust</option>
                        </select>
                    </div>
                    {formData.entityType === "individual" && (
                        <>
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <label htmlFor="firstName" className="w-auto md:w-160 lg:w-240 text-start md:text-right">
                                    First Name:
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    className="p-1 pl-2 border rounded-sm w-auto md:w-100 lg:w-200"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Required"
                                />
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <label htmlFor="lastName" className="md:w-160 lg:w-240 sm:text-start md:text-right">
                                    Last Name:
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    className="p-1 pl-2 border rounded-sm w-auto md:w-100 lg:w-200"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    placeholder="Required"
                                />
                            </div>
                        </>
                    )}
                    {formData.entityType === "Partnership" && (
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <label htmlFor="partnership" className="md:w-160 lg:w-240 sm:text-start md:text-right">
                                Business Name:
                            </label>
                            <input
                                id="partnership"
                                type="text"
                                name="partnership"
                                className="p-1 pl-2 border rounded-sm w-auto md:w-100 lg:w-200"
                                value={formData.partnership}
                                onChange={handleChange}
                                required
                                placeholder="Required"
                            />
                        </div>
                    )}

                    {formData.entityType === "Joint Venture" && (
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <label htmlFor="jointVenture" className="md:w-160 lg:w-240 sm:text-start md:text-right">
                                Business Name:
                            </label>
                            <input
                                id="jointVenture"
                                type="text"
                                name="jointVenture"
                                className="p-1 pl-2 border rounded-sm w-auto md:w-100 lg:w-200"
                                value={formData.jointVenture}
                                onChange={handleChange}
                                required
                                placeholder="Required"
                            />
                        </div>
                    )}

                    {formData.entityType === "Limited Liability Corporation" && (
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <label htmlFor="llc" className="md:w-160 lg:w-240 sm:text-start md:text-right">
                                Business Name:
                            </label>
                            <input
                                id="llc"
                                type="text"
                                name="llc"
                                className="p-1 pl-2 border rounded-sm w-auto md:w-100 lg:w-200"
                                value={formData.llc}
                                onChange={handleChange}
                                required
                                placeholder="Required"
                            />
                        </div>
                    )}

                    {formData.entityType === "corporation" && (
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <label htmlFor="corporation" className="md:w-160 lg:w-240 sm:text-start md:text-right">
                                Business Name:
                            </label>
                            <input
                                id="corporation"
                                type="text"
                                name="corporation"
                                className="p-1 pl-2 border rounded-sm w-auto md:w-100 lg:w-200"
                                value={formData.corporation}
                                onChange={handleChange}
                                required
                                placeholder="Required"
                            />
                        </div>
                    )}

                    {formData.entityType === "trust" && (
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <label htmlFor="trust" className="md:w-160 lg:w-240 sm:text-start md:text-right">
                                Business Name:
                            </label>
                            <input
                                id="trust"
                                type="text"
                                name="trust"
                                className="p-1 pl-2 border rounded-sm w-auto md:w-100 lg:w-200"
                                value={formData.trust}
                                onChange={handleChange}
                                required
                                placeholder="Required"
                            />
                        </div>
                    )}

                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="policyForm" className="w-auto md:w-160 lg:w-240 text-start md:text-right">
                            Policy Form:
                        </label>
                        <select
                            id="policyForm"
                            name="policyForm"
                            className="p-2 border rounded-sm w-auto md:w-100 lg:w-200"
                            value={formData.policyForm}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Required</option>
                            <option value="Ho3">HO3</option>
                            <option value="Ho2">HO2</option>
                            <option value="Ho4">HO4</option>
                            <option value="HO5">HO5</option>
                            <option value="HO6">HO6</option>
                            <option value="HO8">HO8</option>
                            <option value="DP2">DP2</option>
                            <option value="DP3">DP3</option>
                        </select>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="occupancyType" className="md:w-160 lg:w-240 text-start md:text-right">
                            Occupancy Type:
                        </label>
                        <select
                            id="occupancyType"
                            name="occupancyType"
                            className="p-2 border rounded-sm w-auto md:w-100 lg:w-200"
                            value={formData.occupancyType}
                            onChange={handleChange}
                        >
                            <option value="" disabled hidden>Required</option>
                            <option value="owner">Primary - Owner occupied</option>
                            <option value="secondary">Secondary/Seasonal - Owner occupied</option>
                            <option value="tenant">Tenant occupied</option>
                            <option value="vacant">Vacant</option>
                            <option value="builderRisk">Builder risk</option>
                        </select>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="loss" className="w-auto md:w-160 lg:w-240 text-start md:text-right">Is there any loss history from the past 3 years?</label>
                        <select
                            id="loss"
                            name="lossHistory"
                            className="p-2 border rounded-sm w-auto md:w-100 lg:w-200"
                            value={formData.lossHistory}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Required</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </form>
            </div>
            <div className="w-full flex justify-center gap-4 p-6 pt-14 pb-14 text-white">
                <Link to="/quote/location">
                    <button
                        className={`bg-sky-700 w-14 p-1 rounded-lg shadow-lg text-sm ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ""}`}
                        disabled={!isFormValid()}
                    >
                        Next
                    </button>
                </Link>
            </div>
            <BackToTop />
            <Footer />
        </div>
    )
}

export default ApplicantInfo;
