import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateQuote from "../policy/createQuote";
import Footer from "../shared/footer";

const Rate = () => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <CreateQuote />
            <div className="flex-1 flex flex-col justify-center items-center text-center text-xl p-4">
                <div className="flex flex-col gap-6">
                <h1 className="font-semibold">🎉 Congratulations!</h1>
                <p>Your application has been completed successfully. Now, let’s get your rate and see the best options for you!</p>
                </div>
                <div className="pt-16 pb-10 text-white">
                    <Link to="/quote/question">
                        <button className="bg-sky-700 w-40 p-1 rounded-lg shadow-lg shadow-gray-500 text-md">
                            Get Rate
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Rate;