import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateQuote from "../policy/createQuote";
import BackToTop from "../shared/backToTop";
import Footer from "../shared/footer";

const Location = () => {
    // const [address1, setAddress1] = useState();
    // const [address2, setAddress2] = useState();
    // const [zipCode, setZipCode] = useState();
    // const [city, setCity] = useState();
    // const [state, setState] = useState();
    // const [distanceToCoast, setDistanceToCoast] = useState();
    // const [rental, setRental] = useState();
    // const [numOfFamily, setNumOfFamily] = useState();
    // const [townhouse, setTownhouse] = useState();
    // const [sqft, setSqft] = useState();
    // const [constructionType, setConstructionType] = useState();
    // const [protectionClass, setProtectionClass] = useState();
    // const [yearBuilt, setYearBuilt] = useState();
    const [formData, setFormData] = useState({
        address1: "",
        address2: "",
        zipCode: "",
        city: "",
        state: "",
        distanceToCostal: "",
        rental: "",
        numOfFamily: "",
        townhouse: "",
        sqft: "",
        constructionType: "",
        protectionClass: "",
        yearBuilt: "",
    });

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("location")) || {};
        if (savedData) setFormData(savedData);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedData = { ...formData, [name]: value};
        setFormData(updatedData);
        localStorage.setItem("location", JSON.stringify(updatedData)); 
    };

    const isFormValid = () => {
        return (
            formData.address1 &&
            formData.zipCode &&
            formData.city &&
            formData.state &&
            formData.distanceToCostal &&
            formData.rental &&
            formData.numOfFamily &&
            formData.townhouse &&
            formData.sqft &&
            formData.constructionType &&
            formData.protectionClass &&
            formData.yearBuilt
        );
    };

    return (
        <div className="w-full h-full flex flex-col">
            <CreateQuote />
            <div className="w-full pl-4 pr-4">
                <h3 className="text-md font-semibold text-center pb-4">Location</h3>
                <form className="w-full flex flex-col gap-4 mx-auto max-w-screen-lg text-md text-black">
                    <div className="w-full flex flex-col align-center mx-auto max-w-screen-lg text-md gap-6 p-4 bg-gray-100">
                        {/* row1 address line */}
                        <div className="w-full flex flex-col md:flex-row justify-between gap-4">
                            <div className="flex flex-col justify-center items-center gap-4 w-full md:w-3/5">
                                <label htmlFor="address1" className="w-full">Address:</label>
                                <input
                                    id="address1"
                                    type="text"
                                    name="address1"
                                    className="p-1 pl-2 border rounded-sm w-full"
                                    value={formData.address1}
                                    onChange={handleChange}
                                    required
                                    placeholder="Required"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4 w-full md:w-2/5">
                                <label htmlFor="address2" className="w-full">Additional address:</label>
                                <input
                                    id="address2"
                                    type="text"
                                    name="address2"
                                    className="p-1 pl-2 border rounded-sm w-full"
                                    value={formData.address2}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* row2 city, state, code */}
                        <div className="w-full flex flex-col md:flex-row justify-between gap-4">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <label htmlFor="city" className="w-full">City:</label>
                                <input
                                    id="city"
                                    type="text"
                                    name="city"
                                    className="p-1 pl-2 border rounded-sm w-full"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    placeholder="Required"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <label htmlFor="state" className="w-full">State:</label>
                                <input
                                    id="state"
                                    type="text"
                                    name="state"
                                    className="p-1 pl-2 border rounded-sm w-full"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                    placeholder="Required"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <label htmlFor="zipCode" className="w-full">Zip Code:</label>
                                <input
                                    id="zipCode"
                                    type="text"
                                    name="zipCode"
                                    className="p-1 pl-2 border rounded-sm w-full"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    required
                                    placeholder="Required"
                                />
                            </div>
                        </div>

                        {/* row 3 */}
                        <div className="w-full flex flex-col md:flex-row  gap-6">
                            <div className="flex flex-col gap-4 w-full md:w-2/7">
                                <label htmlFor="distanceToCostal" className="w-full">Distance To Coastal:</label>
                                <select
                                    id="distanceToCostal"
                                    name="distanceToCostal"
                                    className="p-2 border rounded-sm w-full"
                                    value={formData.distanceToCostal}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled hidden></option>
                                    <option value="0.3">Equal or less than less than 0.3 mile</option>
                                    <option value="0.5">Equal or less than less than 0.5 mile</option>
                                    <option value="1">Equal or less than 1 mile</option>
                                    <option value="1+">Greater than 1 mile</option>
                                </select>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <label htmlFor="yearBuilt" className="w-full">Year of built:</label>
                                <input
                                    id="yearBuilt"
                                    type="text"
                                    name="yearBuilt"
                                    className="p-1.5 border rounded-sm w-full"
                                    value={formData.yearBuilt}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col align-center mx-auto max-w-screen-lg text-md gap-6 p-4 bg-gray-100">
                        {/* first row  */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 md:flex-row justify-between gap-4">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <label htmlFor="rental" className="w-full">Rental:</label>
                                <select
                                    id="rental"
                                    name="rental"
                                    className="p-2 border rounded-sm w-full"
                                    value={formData.rental}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled hidden></option>
                                    <option value="no-rental">None</option>
                                    <option value="annual">Annual</option>
                                    <option value="three">Less than 3 months</option>
                                    <option value="six">Less than 6 months</option>
                                </select>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <label htmlFor="numOfFamily" className="w-full">Number Of Family:</label>
                                <select
                                    id="numOfFamily"
                                    name="numOfFamily"
                                    className="p-2 border rounded-sm w-full"
                                    value={formData.numOfFamily}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled></option>
                                    <option value="oneFamily">1 family</option>
                                    <option value="twoFamily">2 family</option>
                                    <option value="threeFamily">3 family</option>
                                    <option value="fourFamily">4 family</option>
                                </select>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <label htmlFor="townhouse" className="w-full">Townhouse:</label>
                                <select
                                    id="townhouse"
                                    name="townhouse"
                                    className="p-2 border rounded-sm w-full"
                                    value={formData.townhouse}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled></option>
                                    <option value="townhouse">Yes</option>
                                    <option value="notTownhouse">No</option>
                                </select>
                            </div>
                        </div>

                        {/* second row */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 md:flex-row justify-between gap-4">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <label htmlFor="sqft" className="w-full">Total sqft:</label>
                                <input
                                    id="sqft"
                                    name="sqft"
                                    type="text"
                                    className="p-2 border rounded-sm w-full"
                                    value={formData.sqft}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <label htmlFor="constructionType" className="w-full">Construction Type:</label>
                                <select
                                    id="constructionType"
                                    name="constructionType"
                                    className="p-2 border rounded-sm w-full"
                                    value={formData.constructionType}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled></option>
                                    <option value="fireResistive">Fire Resistive</option>
                                    <option value="masonry">Masonry</option>
                                    <option value="joistedMasonry">Joisted masonry</option>
                                    <option value="Frame">Frame</option>
                                </select>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4">
                                <label htmlFor="protectionClass" className="w-full">Protection Class Code:</label>
                                <select
                                    id="protectionClass"
                                    name="protectionClass"
                                    className="p-2 border rounded-sm w-full"
                                    value={formData.protectionClass}
                                    onChange={handleChange}
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
                    </div>
                </form>
            </div>
            <div className="w-full flex justify-center gap-4 p-6 pt-14 pb-14 text-white">
                <Link to="/quote/applicant-info">
                    <button className="bg-sky-700 w-20 p-1 rounded-lg shadow-lg text-sm">
                        Previous
                    </button>
                </Link>
                <Link to="/quote/history">
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

export default Location;