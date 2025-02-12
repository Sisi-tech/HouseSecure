import { number } from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateQuote from "../policy/createQuote";

const Location = () => {
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [zipCode, setZipCode] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [distanceToCoast, setDistanceToCoast] = useState();
    const [rental, setRental] = useState();
    const [numOfFamily, setNumOfFamily] = useState();
    const [townhouse, setTownhouse] = useState();
    const [sqft, setSqft] = useState();
    const [constructionType, setConstructionType] = useState();
    const [protectionClass, setProtectionClass] = useState();
    const [yearBuilt, setYearBuilt] = useState();

    return (
        <div className="w-full h-full flex flex-col items-center">
            <CreateQuote />
            <form className="w-full flex flex-col gap-4 mx-auto max-w-screen-lg text-lg pt-4 md:pt-10 p-4 lg:p-10 text-black">
                <div className="w-full flex flex-col align-center mx-auto max-w-screen-lg text-lg space-y-5 p-4 gap-2 bg-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="address1" className="sm:w-auto md:w-160 lg:w-240 sm:text-start md:text-right">Address:</label>
                        <input
                            id="address1"
                            type="text"
                            className="p-1 pl-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                            required
                            placeholder="Required"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="address2" className="sm:w-auto md:w-160 lg:w-240 sm:text-start md:text-right">Additional address:</label>
                        <input
                            id="address2"
                            type="text"
                            className="p-1 pl-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                            required
                            placeholder="Required"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="city" className="sm:w-auto md:w-160 lg:w-240 sm:text-start md:text-right">City:</label>
                        <input
                            id="city"
                            type="text"
                            className="p-1 pl-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            placeholder="Required"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="state" className="sm:w-auto md:w-160 lg:w-240 sm:text-start md:text-right">State:</label>
                        <input
                            id="state"
                            type="text"
                            className="p-1 pl-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                            value={state}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            placeholder="Required"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="zipCode" className="sm:w-auto md:w-160 lg:w-240 sm:text-start md:text-right">Zip Code:</label>
                        <input
                            id="zipCode"
                            type="text"
                            className="p-1 pl-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            required
                            placeholder="Required"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="distanceToCostal" className="md:w-160 lg:w-240 sm:text-start md:text-right">Distance To Coastal:</label>
                        <select
                            id="distanceToCostal"
                            className="p-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                            value={distanceToCoast}
                            onChange={(e) => setDistanceToCoast(e.target.value)}
                        >
                            <option value="" disabled hidden></option>
                            <option value="0.3">Equal or less than less than 0.3 mile</option>
                            <option value="0.5">Equal or less than less than 0.5 mile</option>
                            <option value="1">Equal or less than 1 mile</option>
                            <option value="1+">Greater than 1 mile</option>
                        </select>
                    </div>
                </div>
                <div className="w-full flex flex-col mx-auto max-w-screen-lg text-lg space-y-5 gap-2 p-4 bg-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="rental" className="md:w-160 lg:w-240 sm:text-start md:text-right">Rental:</label>
                        <select
                            id="rental"
                            className="p-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                            value={rental}
                            onChange={(e) => setRental(e.target.value)}
                        >
                            <option value="" disabled hidden></option>
                            <option value="annual">Annual</option>
                            <option value="three">Less than 3 months</option>
                            <option value="six">Less than 6 months</option>
                        </select>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="numOfFamily" className="md:w-160 lg:w-240 sm:text-start md:text-right">Number Of Family:</label>
                        <select
                            id="numOfFamily"
                            className="p-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                            value={numOfFamily}
                            onChange={(e) => setNumOfFamily(e.target.value)}
                        >
                            <option value="" disabled></option>
                            <option value="oneFamily">1 family</option>
                            <option value="twoFamily">2 family</option>
                            <option value="threeFamily">3 family</option>
                            <option value="fourFamily">4 family</option>
                        </select>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="townhouse" className="md:w-160 lg:w-240 sm:text-start md:text-right">Townhouse:</label>
                        <select
                            id="townhouse"
                            className="p-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                            value={townhouse}
                            onChange={(e) => setTownhouse(e.target.value)}
                        >
                            <option value="" disabled></option>
                            <option value="townhouse">Yes</option>
                            <option value="notTownhouse">No</option>
                        </select>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="sqft" className="md:w-160 lg:w-240 sm:text-start md:text-right">Total sqft:</label>
                        <input
                            id="sqft"
                            type="number"
                            className="p-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                            value={sqft}
                            onChange={(e) => setSqft(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="constructionType" className="md:w-160 lg:w-240 sm:text-start md:text-right">Construction Type:</label>
                        <select
                            id="constructionType"
                            className="p-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                            value={constructionType}
                            onChange={(e) => setConstructionType(e.target.value)}
                        >
                            <option value="" disabled></option>
                            <option value="fireResistive">Fire Resistive</option>
                            <option value="masonry">Masonry</option>
                            <option value="joistedMasonry">Joisted masonry</option>
                            <option value="Frame">Frame</option>
                        </select>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <label htmlFor="protectionClass" className="md:w-160 lg:w-240 sm:text-start md:text-right">Protection Class Code:</label>
                        <select
                            id="protectionClass"
                            className="p-2 border rounded-sm sm:w-auto md:w-100 lg:w-200"
                            value={protectionClass}
                            onChange={(e) => setProtectionClass(e.target.value)}
                        >
                            <option value="" disabled></option>
                            <option value="nyc">NYC</option>
                            <option value="p">P</option>
                            <option value="class1">1</option>
                            <option value="class2">2</option>
                            <option value="class3">3</option>
                            <option value="class4">4</option>
                            <option value="class5">5</option>
                        </select>
                    </div>
                </div>
            </form>
            <div className="w-full flex justify-end gap-4 p-6 lg:pr-10 lg:pt-20">
                <Link to="/quote/applicant-info">
                    <button className="bg-sky-700 w-20 p-1 rounded-lg shadow-lg text-md">
                        Previous
                    </button>
                </Link>
                <Link to="/quote/history">
                    <button className="bg-sky-700 w-14 p-1 rounded-lg shadow-lg text-md">
                        Next
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Location;