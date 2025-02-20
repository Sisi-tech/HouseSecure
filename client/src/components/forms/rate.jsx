import React, { useState } from "react";
import CreateQuote from "../policy/createQuote";
import Footer from "../shared/footer";


const applicantInfoUrl = `${import.meta.env.VITE_API_URL}/api/v1/applicant-info`;
const locationUrl = `${import.meta.env.VITE_API_URL}/api/v1/location`;
const historyUrl = `${import.meta.env.VITE_API_URL}/api/v1/history`;
const coverageUrl = `${import.meta.env.VITE_API_URL}/api/v1/coverage`;
const interestUrl = `${import.meta.env.VITE_API_URL}/api/v1/interest`;
const questionUrl = `${import.meta.env.VITE_API_URL}/api/v1/question`;
const quoteUrl = `${import.meta.env.VITE_API_URL}/api/v1/quote`;

const Rate = () => {
    const [isSubmit, setIsSubmit] = useState(false);
    const submitQuote = async () => {
        try {
            const userId = localStorage.getItem("userId")?.trim();
            if (!userId) {
                console.error("User ID not found. Please log in again.");
                return;
            }

            // get form data from localStorage
            const applicantInfo = JSON.parse(localStorage.getItem("applicantInfo")) || {};
            const location = JSON.parse(localStorage.getItem("location")) || {};
            const history = JSON.parse(localStorage.getItem("history")) || {};
            const interest = JSON.parse(localStorage.getItem("interest")) || {};
            const coverage = JSON.parse(localStorage.getItem("coverage")) || {};
            const question = JSON.parse(localStorage.getItem("question")) || {};

            const postData = async (url, data) => {
                const res = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...data, userId }),
                });
                if (!res.OK) {
                    const errorMsg = await res.text(); // Read response error message
                    throw new Error(`Failed to submit data to ${url}: ${errorMsg}`);
                }
                return res.json();
            }

            const [applicantInfoRes, locationRes, historyRes, coverageRes, interestRes, questionRes] = await Promise.all([
                postData(applicantInfoUrl, applicantInfo),
                postData(locationUrl, location),
                postData(historyUrl, history),
                postData(coverageUrl, coverage),
                postData(interestUrl, interest),
                postData(questionUrl, question),
            ])

            const quoteRes = await fetch(quoteUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId,
                    applicantInfoId: applicantInfoRes.applicantInfoId,
                    locationId: locationRes.locationId,
                    historyId: historyRes.historyId,
                    coverageId: coverageRes.coverageId,
                    interestId: interestRes.interestId,
                    responseId: questionRes.responseId,
                }),
            });
            if (!quoteRes.OK) throw new Error("Failed to submit quote");

            const quoteData = await quoteRes.json();
            console.log("Quote saved:", quoteData);
            setIsSubmit(true);
        } catch (error) {
            console.error("Error submitting quote", error);
        }
    }
    return (
        <div className="w-full min-h-screen flex flex-col">
            <CreateQuote />
            <div className="flex-1 flex flex-col justify-center items-center text-center text-md pl-4 pr-4">
                {isSubmit ? (
                    <div className="flex flex-col gap-6">
                        <h1 className="font-semibold">🎉 Congratulations!</h1>
                        <p>Your application has been completed successfully.</p>
                    </div>
                ) : null
                }
                <div className="pt-16 pb-10 text-white">
                    <button
                        className="bg-sky-700 w-24 p-1 rounded-lg shadow-md shadow-gray-500 text-sm hover:bg-sky-900"
                        onClick={submitQuote}
                    >
                        Get Rate
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Rate;