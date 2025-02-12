import { listItemIconClasses } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateQuote from "../policy/createQuote";

const Loss = ({ index, loss, updatedLoss, removeLoss }) => {
    return (
        <div className="w-full mx-auto max-w-screen-lg text-lg space-y-5 pt-4 md:pt-10 p-4">
            <h3 className="text-lg font-semibold text-center">Loss {index + 1}</h3>

            {/* first row */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col md:flex-1">
                    <label htmlFor={`dateOfLoss-${index}`} className="w-48 md:w-56 text-start md:text-right">Date of Loss:</label>
                    <input
                        id={`dateOfLoss-${index}`}
                        type="date"
                        className="p-2 border rounded-sm w-full"
                        value={loss.dateOfLoss}
                        onChange={(e) => updatedLoss(index, "dateOfLoss", e.target.value)}
                    />
                </div>
                <div className="flex flex-col md:flex-1">
                    <label htmlFor={`category-${index}`} className="w-48 md:w-56 text-start md:text-right">Category:</label>
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
                <div className="flex flex-col md:flex-1">
                    <label htmlFor={`paidAmount-${index}`} className="w-48 md:w-56 text-start md:text-right">Amount:</label>
                    <input
                        id={`paidAmount-${index}`}
                        type="number"
                        className="p-2 border rounded-sm w-full"
                        value={loss.paidAmount}
                        onChange={(e) => updatedLoss(index, "paidAmount", Number(e.target.value))}
                    />
                </div>
            </div>

            {/* second row */}
            <div className="flex flex-col">
                <label htmlFor={`description-${index}`} className="md:w-160 lg:w-240 sm:text-start md:text-right">Description of Loss:</label>
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
                className="bg-red-500 text-white px-3 py-1 rounded-lg shadow-md"
                onClick={() => removeLoss(index)}
            >
                Remove
            </button>
            </div>
        </div>
    )
};

const History = () => {
    const [priorCarrier, setPriorCarrier] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [lapse, setLapse] = useState("");
    const [losses, setLosses] = useState([
        { dateOfLoss: "", category: "", paidAmount: "", description: "" }
    ]);

    const addLoss = () => {
        setLosses([...losses, { dateOfLoss: "", category: "", paidAmount: "", description: "" }]);
    }

    const removeLoss = (index) => {
        setLosses(losses.filter((_, i) => i !== index));
    };

    const updateLoss = (index, field, value) => {
        const updatedLosses = [...losses];
        updatedLosses[index][field] = value;
        setLosses(updatedLosses);
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            <CreateQuote />
            <form className="w-full mx-auto max-w-screen-lg text-lg space-y-5 pt-4 md:pt-10 p-4 bg-gray-100 text-black">
                <div className="flex flex-col gap-4">
                    <label htmlFor="priorCarrier" className="w-full">Prior Carrier(If new purchase please indicate new purchase):</label>
                    <input
                        id="priorCarrier"
                        type="text"
                        className="p-1 pl-2 border rounded-sm w-full"
                        value={priorCarrier}
                        onChange={(e) => setPriorCarrier(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="expirationDate" className="w-full text-start">Expiration Date (Please use current date for new purchase):</label>
                    <input
                        id="expirationDate"
                        type="date"
                        className="p-1 pl-2 border rounded-sm w-full "
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="lapse" className="w-full text-start">Lapsed in coverage (Please select No for new purchase):</label>
                    <select
                        id="lapse"
                        className="p-2 border rounded-sm w-full"
                        value={lapse}
                        onChange={(e) => setLapse(e.target.value)}
                    >
                        <option value="" disabled hidden></option>
                        <option value="lapse">Yes</option>
                        <option value="noLapse">No</option>
                    </select>
                </div>
                {losses.map((loss, index) => (
                    <Loss key={index} index={index} loss={loss} updatedLoss={updateLoss} removeLoss={removeLoss} />
                ))}
                <div className="flex justify-end pb-2">
                    <button
                        type="button"
                        className="bg-sky-700 text-white w-23 p-1 rounded-lg shadow-lg text-md"
                        onClick={addLoss}>
                        Add loss
                    </button>
                </div>
            </form>
            <div className="w-full flex justify-end gap-4 p-6 lg:pr-10 lg:pt-14">
                <Link to="/quote/location">
                    <button className="bg-sky-700 w-20 p-1 rounded-lg shadow-lg text-md">
                        Previous
                    </button>
                </Link>
                <Link to="/quote/coverage">
                    <button className="bg-sky-700 w-14 p-1 rounded-lg shadow-lg text-md">
                        Next
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default History;
