import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateQuote from "../policy/createQuote";

const Rate = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <CreateQuote />
            <div>Rate</div>

            <div className="w-full flex justify-end gap-4 p-6 lg:pr-10">
                <Link to="/quote/question">
                    <button className="bg-sky-700 w-20 p-1 rounded-lg shadow-lg text-md">
                        Previous
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Rate;