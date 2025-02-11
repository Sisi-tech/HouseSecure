import React from "react";
import { Link } from "react-router-dom";
import Menu from "../shared/menu";

const CreateQuote = () => {
    return (
        <div className="w-full">
            <Menu />
            <div className="left-0 w-full md:w-screen mt-10 p-4 text-lg">
                <ul className="flex flex-col md:flex-row justify-center gap-4 text-black">
                    <li><Link to="/quote/applicant-info" className="block px-4 py-2 bg-gray-200 hover:bg-gray-200">Applicant Info</Link></li>
                    <li><Link to="/quote/location" className="block px-4 py-2 bg-gray-200 hover:bg-gray-200">Location</Link></li>
                    <li><Link to="/quote/history" className="block px-4 py-2 bg-gray-200 hover:bg-gray-200">History</Link></li>
                    <li><Link to="/quote/coverage" className="block px-4 py-2 bg-gray-200 hover:bg-gray-200">Coverage</Link></li>
                    <li><Link to="/quote/interest" className="block px-4 py-2 bg-gray-200 hover:bg-gray-200">Additional Interest</Link></li>
                    <li><Link to="/quote/question" className="block px-4 py-2 bg-gray-200 hover:bg-gray-200">Underwriting Questions</Link></li>
                    <li><Link to="/quote/rate" className="block px-4 py-2 bg-gray-200 hover:bg-gray-200">Rate</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default CreateQuote;
