import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateQuote from "../policy/createQuote";

const ApplicantInfo = () => {
    const today = new Date().toISOString().split("T")[0];
    const [selectedDate, setSelectedDate] = useState(today);
    const [entityType, setEntityType] = useState("individual");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [policyForm, setPolicyForm] = useState("");
    const [occupancyType, setOccupancyType] = useState("");
    const [lossHistory, setLossHistory] = useState("");

    const isFormValid = () => {
        if (!entityType || !policyForm || !occupancyType || !lossHistory) return false;
        if (entityType === "individual" && (!firstName || !lastName)) return false;
        if (entityType !== "individual" && !businessName) return false;
        return true;
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <CreateQuote />
            <form className="w-full mx-auto max-w-screen-lg text-lg space-y-5 pt-4 md:pt-10 p-4 bg-gray-100">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <label htmlFor="date" className="md:w-160 lg:w-240 sm:text-start md:text-right">Proposed Effective Date:</label>
                    <input
                        id="date"
                        type="date"
                        className="p-1 pl-2 border rounded-sm w-auto md:w-full"
                        value={selectedDate}
                        min={today}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <label htmlFor="entityType" className="md:w-160 lg:w-240 sm:text-start md:text-right">Entity Type:</label>
                    <select
                        id="entityType"
                        className="p-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                        value={entityType}
                        onChange={(e) => setEntityType(e.target.value)}
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
                {entityType === "individual" ? (
                    <>
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <label htmlFor="firstName" className="sm:w-auto md:w-160 lg:w-240 sm:text-start md:text-right">
                                First Name:
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                className="p-1 pl-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
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
                                className="p-1 pl-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                placeholder="Required"
                            />
                        </div>
                    </>
                ) : entityType ? (
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="businessName" className="md:w-160 lg:w-240 sm:text-start md:text-right">
                            {`${entityType}:`}
                        </label>
                        <input
                            id="businessName"
                            type="text"
                            className="p-1 pl-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            required
                            placeholder="Required"
                        />
                    </div>
                ) : null}
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <label htmlFor="policyForm" className="md:w-160 lg:w-240 sm:text-start md:text-right">
                        Policy Form:
                    </label>
                    <select
                        id="policyForm"
                        className="p-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                        value={policyForm}
                        onChange={(e) => setPolicyForm(e.target.value)}
                    >
                        <option value="" disabled>Required</option>
                        <option value="ho3">HO3</option>
                        <option value="ho2">HO2</option>
                        <option value="ho4">HO4</option>
                        <option value="ho5">HO5</option>
                        <option value="ho6">HO6</option>
                        <option value="ho8">HO8</option>
                        <option value="dp2">DP2</option>
                        <option value="dp3">DP3</option>
                    </select>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <label htmlFor="occupancyType" className="md:w-160 lg:w-240 sm:text-start md:text-right">
                        Occupancy Type:
                    </label>
                    <select
                        id="occupancyType"
                        className="p-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                        value={occupancyType}
                        onChange={(e) => setOccupancyType(e.target.value)}
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
                    <label htmlFor="loss" className="md:w-160 lg:w-240 sm:text-start md:text-right">Is there any loss history from the past 3 years?</label>
                    <select
                        id="loss"
                        className="p-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                        value={lossHistory}
                        onChange={(e) => setLossHistory(e.target.value)}
                    >
                        <option value="" disabled>Required</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
            <div className="w-full flex justify-end p-6 lg:pr-10 lg:pt-20">
                <Link to="/quote/location">
                    <button 
                        className={`bg-sky-700 w-14 p-1 rounded-lg shadow-lg text-md ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ""}`}
                        disabled={!isFormValid()}
                    >
                        Next
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ApplicantInfo;
