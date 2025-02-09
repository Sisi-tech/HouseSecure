import React, { useState } from "react";
import CreateQuote from "../policy/createQuote";

const ApplicantInfo = () => {
    const today = new Date().toISOString().split("T")[0];
    const [selectedDate, setSelectedDate] = useState(today);
    const [entityType, setEntityType] = useState("individual"); 
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [businessName, setBusinessName] = useState("");

    return (
        <div className="w-full flex flex-col items-center">
            <CreateQuote />
            <form className="w-full max-w-md text-lg space-y-4 pt-4">
                <div className="flex items-center gap-4">
                    <label htmlFor="date" className="w-100 text-right">Proposed Effective Date:</label>
                    <input 
                        id="date"
                        type="date" 
                        className="p-1 pl-2 border rounded-sm w-full" 
                        value={selectedDate}
                        min={today}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <label htmlFor="entityType" className="w-100 text-right">Entity Type:</label>
                    <select 
                        id="entityType" 
                        className="p-2 border rounded-sm w-full" 
                        value={entityType}
                        onChange={(e) => setEntityType(e.target.value)}
                    >
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
                    <div className="flex items-center gap-4">
                        <label htmlFor="firstName" className="w-100 text-right">
                            First Name:
                        </label>
                        <input 
                            id="firstName"
                            type="text"
                            className="p-2 border rounded-sm w-full"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <label htmlFor="lastName" className="w-100 text-right">
                            Last Name:
                        </label>
                        <input 
                            id="lastName"
                            type="text"
                            className="p-2 border rounded-sm w-full"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required 
                        />
                    </div>
                    </>
                ) : entityType ? (
                    <div className="flex items-center gap-4">
                        <label htmlFor="businessName" className="w-100 text-right">
                            {`${entityType}:`}
                        </label>
                        <input 
                            id="businessName"
                            type="text"
                            className="p-2 border rounded-sm w-full"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            required
                        />
                    </div>
                ) : null }
            </form>
        </div>
    )
}

export default ApplicantInfo;
