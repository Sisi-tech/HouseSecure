import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateQuote from "../policy/createQuote";
import BackToTop from "../shared/backToTop";
import Footer from "../shared/footer";

const Interest = () => {
    // const [interests, setInterests] = useState([]);
    // const [interestType, setInterestType] = useState("");
    // const [name, setName] = useState("");
    // const [mailingAddress, setMailingAddress] = useState("");
    // const [city, setCity] = useState("");
    // const [state, setState] = useState("");
    // const [code, setCode] = useState("");
    // const [optionalAddress, setOptionalAddress] = useState("");
    const [formData, setFormData] = useState({
        interest: [],
        interestType: "",
        name: "",
        mailingAddress: "",
        city: "",
        state: "",
        code: "",
        optionalAddress: "",
    });

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("interest"));
        if (savedData) setFormData(savedData);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        localStorage.setItem("interest", JSON.stringify(updatedData));
    };

    const handleAddInterest = () => {
        if (!formData.interestType || !formData.name) return;
        const updatedInterests = [
            ...formData.interest,
            { interestType: formData.interestType, name: formData.name },
        ];
        setFormData({ ...formData, interest: updatedInterests, interestType: "", name: "" });
        localStorage.setItem("interest", JSON.stringify({ ...formData, interest: updatedInterests }));
    };

    const handleDeleteInterest = (index) => {
        const updatedInterests = formData.interest.filter((_, i) => i !== index);
        setFormData({ ...formData, interest: updatedInterests });
        localStorage.setItem("interest", JSON.stringify(updatedData));
    };

    return (
        <div className="w-full h-full flex flex-col">
            <CreateQuote />
            <div className="w-full mx-auto max-w-screen-lg text-md pl-4 pr-4">
                <h3 className="text-md font-semibold text-center pb-4">Interest</h3>
                {/* display list of interests has been added */}
                <div className="flex flex-col justify-center items-center gap-6">
                    {formData.interest.length > 0 ? (
                        <table className="border-collapse border border-gray-400 text-black">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-400 p-2">Interest Type</th>
                                    <th className="border border-gray-400 p-2">Name</th>
                                    <th className="border border-gray-400 p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {formData.interest.map((item, index) => ( // Use interests instead of Interests
                                    <tr key={index} className="border border-gray-400">
                                        <td className="border border-gray-400 p-2">{item.interestType}</td>
                                        <td className="border border-gray-400 p-2">{item.name}</td>
                                        <td className="border border-gray-400 p-2">
                                            <button className="text-blue-600">Edit</button>
                                            <button
                                                className="text-red-600 ml-2"
                                                onClick={() => handleDeleteInterest(index)}
                                            >Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    ) : null }
                </div>

                {/* add interest form */}
                <form className="w-full mx-auto max-w-screen-lg text-md gap-6 p-4 bg-gray-100 text-black">
                    {/* interest type filed */}
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <label htmlFor="interestType" className="w-full">Interest type:</label>
                        <select
                            id="interestType"
                            name="interestType"
                            className="p-2 border rounded-sm w-full"
                            value={formData.interestType}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Not Applicable</option>
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
                            name="name"
                            type="text"
                            className="p-1 pl-2 border rounded-sm w-full"
                            value={formData.name}
                            onChange={handleChange}
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
                                    name="mailingAddress"
                                    className="p-1 pl-2 border rounded-sm w-full"
                                    value={formData.mailingAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-2 w-full md:w-2/5">
                                <label htmlFor="optional" className="w-full">Optional/mailing address:</label>
                                <input
                                    id="optional"
                                    name="optionalAddress"
                                    type="text"
                                    className="p-1 pl-2 border rounded-sm w-full"
                                    value={formData.optionalAddress}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-col md:flex-row justify-between gap-4">
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <label htmlFor="mailingCity" className="w-full">City:</label>
                                <input
                                    id="mailingCity"
                                    name="city"
                                    type="text"
                                    className="p-1 pl-2 border rounded-sm w-full"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <label htmlFor="mailingState" className="w-full">State:</label>
                                <select
                                    id="mailingState"
                                    name="state"
                                    className="p-2 border rounded-sm w-full"
                                    value={formData.state}
                                    onChange={handleChange}
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
                                    name="code"
                                    type="text"
                                    className="p-1 pl-2 border rounded-sm w-full"
                                    value={formData.code}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-center pt-5 text-white">
                        <button
                            className="bg-sky-700 w-26 p-1 rounded-lg shadow-lg text-sm"
                            onSubmit={handleAddInterest}
                        >
                            Add Interest
                        </button>
                    </div>
                </form>
            </div>
            {/* button */}
            <div className="w-full flex justify-center gap-4 p-6 pt-14 pb-14 text-white">
                <Link to="/quote/coverage">
                    <button className="bg-sky-700 w-20 p-1 rounded-lg shadow-lg text-sm">
                        Previous
                    </button>
                </Link>
                <Link to="/quote/question">
                    <button className="bg-sky-700 w-14 p-1 rounded-lg shadow-lg text-sm">
                        Next
                    </button>
                </Link>
            </div>
            <BackToTop />
            <Footer />
        </div>
    )
}

export default Interest;