import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateQuote from "../policy/createQuote";
import BackToTop from "../shared/backToTop";
import Footer from "../shared/footer";
import { FaTrash } from "react-icons/fa";

// Loss Component
const Loss = ({ index, loss, updatedLoss, removeLoss }) => {
    return (
        <div className="w-full mx-auto max-w-screen-lg text-md space-y-4 pt-4">
            <h3 className="text-md font-semibold text-center">Loss {index + 1}</h3>
            {/* first row */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col md:flex-1 gap-2">
                    <label htmlFor={`dateOfLoss-${index}`} className="w-full">
                        Date of Loss:
                    </label>
                    <input
                        id={`dateOfLoss-${index}`}
                        type="date"
                        className="p-1.5 border rounded-sm w-full"
                        value={loss.dateOfLoss}
                        onChange={(e) => updatedLoss(index, "dateOfLoss", e.target.value)}
                    />
                </div>
                <div className="flex flex-col md:flex-1 gap-2">
                    <label htmlFor={`category-${index}`} className="w-full">
                        Category:
                    </label>
                    <select
                        id={`category-${index}`}
                        className="p-2 border rounded-sm w-full"
                        value={loss.category}
                        onChange={(e) => updatedLoss(index, "category", e.target.value)}
                    >
                        <option value="" disabled hidden></option>
                        <option value="fire">Fire</option>
                        <option value="water">Water damage</option>
                    </select>
                </div>
                <div className="flex flex-col md:flex-1 gap-2">
                    <label htmlFor={`paidAmount-${index}`} className="w-full">
                        Amount:
                    </label>
                    <input
                        id={`paidAmount-${index}`}
                        type="text"
                        className="p-1.5 border rounded-sm w-full"
                        value={loss.paidAmount}
                        onChange={(e) => updatedLoss(index, "paidAmount", Number(e.target.value))}
                    />
                </div>
            </div>

            {/* second row */}
            <div className="flex flex-col gap-2">
                <label htmlFor={`description-${index}`} className="w-full">
                    Description of Loss:
                </label>
                <textarea
                    id={`description-${index}`}
                    type="text"
                    className="p-2 border rounded-md w-full h-24 resize-none"
                    value={loss.description}
                    onChange={(e) => updatedLoss(index, "description", e.target.value)}
                />
            </div>

            {/* remove button */}
            <div className="flex justify-end">
                <button
                    type="button"
                    className="text-gray-500 px-3 py-1"
                    onClick={() => removeLoss(index)}
                >
                    <FaTrash size={16} />
                </button>
            </div>
        </div>
    );
};

// History Component
const History = () => {
    const [formData, setFormData] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem("history"));
        return savedData ? savedData.formData : { priorCarrier: "", expirationDate: "", lapse: "" };
    });
    const [losses, setLosses] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem("history"));
        return savedData ? savedData.losses : [];
    });

    useEffect(() => {
        const dataToSave = { formData, losses };
        localStorage.setItem("history", JSON.stringify(dataToSave));
    }, [formData, losses]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        const updatedData = { ...formData, [name]: value};
        setFormData(updatedData);
        setFormData(updatedData);
    }

    const isFormValid = () => {
        if (!formData.priorCarrier || !formData.expirationDate || !formData.lapse) return false;
        return true;
    }

    const addLoss = () => {
        setLosses([
            ...losses,
            { dateOfLoss: "", category: "", paidAmount: "", description: "" },
        ]);
    };

    const removeLoss = (index) => {
        const updatedLosses = losses.filter((_, i) => i !== index);
        setLosses(updatedLosses);
    };

    const updateLoss = (index, field, value) => {
        const updatedLosses = [...losses];
        updatedLosses[index][field] = value;
        setLosses(updatedLosses);
    };

    return (
        <div className="w-full h-full flex flex-col">
            <CreateQuote />
            <div className="w-full pl-4 pr-4">
                <h3 className="text-md font-semibold text-center pb-4">History</h3>
                <form className="w-full mx-auto max-w-screen-lg text-md space-y-5 pt-6 p-4 bg-gray-100 text-black">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="priorCarrier" className="w-full">Prior Carrier(If new purchase please indicate new purchase):</label>
                        <input
                            id="priorCarrier"
                            type="text"
                            name="priorCarrier"
                            className="p-1 pl-2 border rounded-sm w-full"
                            value={formData.priorCarrier}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="expirationDate" className="w-full text-start">Expiration Date (Please use current date for new purchase):</label>
                        <input
                            id="expirationDate"
                            type="date"
                            name="expirationDate"
                            className="p-1 pl-2 border rounded-sm w-full"
                            value={formData.expirationDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="lapse" className="w-full text-start">Lapsed in coverage (Please select No for new purchase):</label>
                        <select
                            id="lapse"
                            className="p-2 border rounded-sm w-full"
                            name="lapse"
                            value={formData.lapse}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled hidden></option>
                            <option value="lapse">Yes</option>
                            <option value="noLapse">No</option>
                        </select>
                    </div>
                    {losses.map((loss, index) => (
                        <Loss key={index} index={index} loss={loss} updatedLoss={updateLoss} removeLoss={removeLoss} />
                    ))}
                    <div className="flex justify-center pb-2">
                        <button
                            type="button"
                            className="bg-sky-700 text-white w-23 p-1 rounded-lg shadow-lg text-sm"
                            onClick={addLoss}>
                            Add loss
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-full flex justify-center gap-4 p-6 pt-14 pb-14 text-white">
                <Link to="/quote/location">
                    <button className="bg-sky-700 w-20 p-1 rounded-lg shadow-lg text-sm">
                        Previous
                    </button>
                </Link>
                <Link to="/quote/coverage">
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

export default History;
