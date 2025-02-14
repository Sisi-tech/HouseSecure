import { Interests } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateQuote from "../policy/createQuote";

const Interest = () => {
    const [interests, setInterests] = useState([]);
    const [interestType, setInterestType] = useState("");
    const [name, setName] = useState("");
    const [mailingAddress, setMailingAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [code, setCode] = useState("");
    const [optionalAddress, setOptionalAddress] = useState("");

    const handleAddInterest = () => {
        if (!interestType || !name) return;
        setInterests([...interests, { interestType, name }]);
        setInterestType("");
        setName("");
    }

    return (
        <div className="w-full h-full flex flex-col items-center">
            <CreateQuote />
            <div className="w-full mx-auto max-w-screen-lg text-lg space-y-5 pt-4 md:pt-10 p-4 bg-gray-100 text-black">

                {/* display list of interests has been added */}
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h3 className="text-lg font-semibold">Interest</h3>
                    {interests.length > 0 ? (
                        <table className="border-collapse border border-gray-400">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-400 p-2">Interest Type</th>
                                    <th className="border border-gray-400 p-2">Name</th>
                                    <th className="border border-gray-400 p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {interests.map((item, index) => ( // Use interests instead of Interests
                                    <tr key={index} className="border border-gray-400">
                                        <td className="border border-gray-400 p-2">{item.interestType}</td>
                                        <td className="border border-gray-400 p-2">{item.name}</td>
                                        <td className="border border-gray-400 p-2">
                                            <button className="text-blue-600">Edit</button>
                                            <button
                                                className="text-red-600 ml-2"
                                                onClick={() => setInterests(interests.filter((_, i) => i !== index))}
                                            >Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    ) : null }
                </div>

                {/* add interest form */}
                <form className="w-full mx-auto max-w-screen-lg text-lg space-y-5 pt-4 md:pt-10 p-4 bg-gray-100 text-black">
                    {/* interest type filed */}
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <label htmlFor="interestType" className="w-full">Interest type:</label>
                        <select
                            id="interestType"
                            className="p-2 border rounded-sm w-full"
                            value={interestType}
                            onChange={(e) => setInterestType(e.target.value)}
                        >
                            <option value="notApplicable" disabled>Not Applicable</option>
                            <option value="additionalInterest">Additional Interest</option>
                            <option value="additionalInsured">Additional Insured</option>
                            <option value="firstMortgage">First Mortgage</option>
                            <option value="secondMortgage">Second Mortgage</option>
                            <option value="namedInsured">Named Insured</option>
                        </select>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <label htmlFor="name" className="w-full">Name:</label>
                        <input
                            id="name"
                            type="text"
                            className="p-1 pl-2 border rounded-sm w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/* interest form filed */}
                    <div className="w-full flex flex-col justify-center items-center space-y-2 gap-6">
                        <div className="w-full flex flex-col md:flex-row justify-between gap-4">
                            <div className="flex flex-col justify-center items-center space-y-2 w-full md:w-3/5">
                                <label htmlFor="mailingAddress" className="w-full">Mailing address:</label>
                                <input
                                    id="mailingAddress"
                                    type="text"
                                    className="p-1 pl-2 border rounded-sm w-full"
                                    value={mailingAddress}
                                    onChange={(e) => setMailingAddress(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-2 w-full md:w-2/5">
                                <label htmlFor="optional" className="w-full">Optional/mailing address:</label>
                                <input
                                    id="optional"
                                    type="text"
                                    className="p-1 pl-2 border rounded-sm w-full"
                                    value={optionalAddress}
                                    onChange={(e) => setOptionalAddress(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-col md:flex-row justify-between gap-4">
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <label htmlFor="mailingCity" className="w-full">City:</label>
                                <input
                                    id="mailingCity"
                                    type="text"
                                    className="p-1 pl-2 border rounded-sm w-full"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <label htmlFor="mailingState" className="w-full">State:</label>
                                <select
                                    id="mailingState"
                                    className="p-2 border rounded-sm w-full"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                >
                                    <option value="" disabled>Select a state</option>
                                    <option value="AL">AL - Alabama</option>
                                    <option value="AK">AK - Alaska</option>
                                    <option value="AZ">AZ - Arizona</option>
                                    <option value="AR">AR - Arkansas</option>
                                    <option value="CA">CA - California</option>
                                    <option value="CO">CO - Colorado</option>
                                    <option value="CT">CT - Connecticut</option>
                                    <option value="DE">DE - Delaware</option>
                                    <option value="FL">FL - Florida</option>
                                    <option value="GA">GA - Georgia</option>
                                    <option value="HI">HI - Hawaii</option>
                                    <option value="ID">ID - Idaho</option>
                                    <option value="IL">IL - Illinois</option>
                                    <option value="IN">IN - Indiana</option>
                                    <option value="IA">IA - Iowa</option>
                                    <option value="KS">KS - Kansas</option>
                                    <option value="KY">KY - Kentucky</option>
                                    <option value="LA">LA - Louisiana</option>
                                    <option value="ME">ME - Maine</option>
                                    <option value="MD">MD - Maryland</option>
                                    <option value="MA">MA - Massachusetts</option>
                                    <option value="MI">MI - Michigan</option>
                                    <option value="MN">MN - Minnesota</option>
                                    <option value="MS">MS - Mississippi</option>
                                    <option value="MO">MO - Missouri</option>
                                    <option value="MT">MT - Montana</option>
                                    <option value="NE">NE - Nebraska</option>
                                    <option value="NV">NV - Nevada</option>
                                    <option value="NH">NH - New Hampshire</option>
                                    <option value="NJ">NJ - New Jersey</option>
                                    <option value="NM">NM - New Mexico</option>
                                    <option value="NY">NY - New York</option>
                                    <option value="NC">NC - North Carolina</option>
                                    <option value="ND">ND - North Dakota</option>
                                    <option value="OH">OH - Ohio</option>
                                    <option value="OK">OK - Oklahoma</option>
                                    <option value="OR">OR - Oregon</option>
                                    <option value="PA">PA - Pennsylvania</option>
                                    <option value="RI">RI - Rhode Island</option>
                                    <option value="SC">SC - South Carolina</option>
                                    <option value="SD">SD - South Dakota</option>
                                    <option value="TN">TN - Tennessee</option>
                                    <option value="TX">TX - Texas</option>
                                    <option value="UT">UT - Utah</option>
                                    <option value="VT">VT - Vermont</option>
                                    <option value="VA">VA - Virginia</option>
                                    <option value="WA">WA - Washington</option>
                                    <option value="WV">WV - West Virginia</option>
                                    <option value="WI">WI - Wisconsin</option>
                                    <option value="WY">WY - Wyoming</option>
                                </select>
                            </div>

                            <div className="flex flex-col justify-center items-center space-y-2">
                                <label htmlFor="postalCode" className="w-full">Postal Code:</label>
                                <input
                                    id="postalCode"
                                    type="text"
                                    className="p-1 pl-2 border rounded-sm w-full"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-end pt-5">
                        <button
                            className="bg-sky-700 w-30 p-1 rounded-lg shadow-lg text-md"
                            onSubmit={handleAddInterest}
                        >
                            Add Interest
                        </button>
                    </div>
                </form>
            </div>
            {/* button */}
            <div className="w-full flex justify-end gap-4 p-6 lg:pr-10">
                <Link to="/quote/coverage">
                    <button className="bg-sky-700 w-20 p-1 rounded-lg shadow-lg text-md">
                        Previous
                    </button>
                </Link>
                <Link to="/quote/question">
                    <button className="bg-sky-700 w-14 p-1 rounded-lg shadow-lg text-md">
                        Next
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Interest;