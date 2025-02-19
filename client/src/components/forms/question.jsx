import { QuestionMarkSharp } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateQuote from "../policy/createQuote";
import BackToTop from "../shared/backToTop";
import Footer from "../shared/footer";

const questions = [
    "1. Any type of business on the premises?",
    "2. Is this a mobile home, manufactured home, or earth home?",
    "3. Is the property currently vacant, in foreclosure, or for sale?",
    "4. Is the home under construction or renovation?",
    "5. Is this an investment property (not owner-occupied)?",
    "6. Are there wood-burning stoves on the premises?",
    "7. Is there an underground oil tank on the premises?",
    "8. Is there a trampoline without a safety net on the premises?",
    "9. Does the dwelling attach to another property (e.g., duplex, townhome)?",
    "10. Does the applicant own or keep any dogs or exotic animals?",
    "11. Are there any aggressive breed dogs on the premises?",
    "12. Has any coverage been declined, canceled, or non-renewed in the past 3 years?",
    "13. Has the applicant filed any homeowners insurance claims in the past 5 years?",
    "14. Is the roof more than 20 years old?",
    "15. Are there any existing damages to the property (e.g., roof, foundation, plumbing, electrical)?",
    "16. Does the property have any prior water, fire, or structural damage?",
    "17. Does the home have functioning smoke detectors in all required areas?",
    "18. Does the property have a swimming pool, hot tub, or spa?",
    "19. If there is a pool, is it fully fenced and does it have a self-locking gate?",
    "20. Are there any unpaid property taxes or liens on the home?",
    "21. Are all utilities (water, gas, electricity) currently active and in good working condition?",
    "22. Is the home located in a high-risk flood or wildfire zone?",
    "23. Does the home have aluminum or knob-and-tube wiring?",
    "24. Does the home have polybutylene plumbing?",
    "25. Has the applicant or any household member been convicted of insurance fraud or arson?",
    "26. Is the home used for short-term rentals (e.g., Airbnb, Vrbo)?",
    "27. Does the property have any open insurance claims?",
    "28. Is there a history of pest or termite infestations?",
    "29. Are there any unrepaired sinkholes, landslides, or foundation issues on the property?",
    "30. Does the home have a security system or surveillance cameras installed?"
];


const UnderwritingQuestion = () => {
    const [answers, setAnswers] = useState({});
    const [unansweredQuestions, setUnansweredQuestions] = useState([]);

    useEffect(() => {
        const storedAnswers = JSON.parse(localStorage.getItem("answers"));
        if (storedAnswers) {
            setAnswers(storedAnswers);
        }
    }, []);

    useEffect(() => {
        if (Object.keys(answers).length > 0) {
            localStorage.setItem("answers", JSON.stringify(answers));
        }
    }, [answers]);

    const handleAnswerChange = (question, answer) => {
        setAnswers((prev) => ({ ...prev, [question]: answer }));
    };

    const selectAllNo = () => {
        const allNoAnswers = questions.reduce((acc, question) => {
            acc[question] = "no";
            return acc;
        }, {});
        setAnswers(allNoAnswers);
        setUnansweredQuestions([]);
    }

    const handleSubmit = () => {
        const unanswered = questions.filter((question) => !answers[question]);
        setUnansweredQuestions(unanswered);
        if (unanswered.length === 0) {
            console.log("Submitted Answers:", answers);
        }
    };

    useEffect(() => {
        const unanswered = questions.filter((question) => !answers[question]);
        setUnansweredQuestions(unanswered);
    }, [answers]);

    const isFormValid = questions.every((question) => answers[question]);

    return (
        <div className="w-full h-full flex flex-col">
            <CreateQuote />
            <div className="w-full max-w-screen-lg mx-auto text-md gap-4 pl-4 pr-4">
                <h3 className="text-md font-semibold text-center">Underwriting Questions</h3>
                <div className="w-full flex justify-end">
                    <button
                        onClick={selectAllNo}
                        className="bg-gray-500 text-white text-sm px-2 py-1 rounded-md mb-4"
                    >
                        Select All as No
                    </button>
                </div>
                <div className="w-full max-w-screen-lg mx-auto text-md bg-gray-100 text-black p-4">
                    {questions.map((question, index) => (
                        <div key={index} className="flex justify-between gap-2 md:gap-4 mb-4 p-2 border-b">
                            <p className="flex items-center">{unansweredQuestions.includes(question) && (
                                <span className="text-red-600 mr-2">*</span>
                            )}
                                {question}
                            </p>
                            <div className="flex gap-2 md:gap-4 space-x-2 space-y-2">
                                <label className="flex items-center gap-1 md:gap-2">
                                    <input
                                        type="radio"
                                        name={question}
                                        value="yes"
                                        checked={answers[question] === "yes"}
                                        onChange={() => handleAnswerChange(question, "yes")}
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-1 md:gap-2">
                                    <input
                                        type="radio"
                                        name={question}
                                        value="no"
                                        checked={answers[question] === "no"}
                                        onChange={() => handleAnswerChange(question, "no")}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-center gap-4 p-6 pt-16 pb-10 text-white">
                <Link to="/quote/interest">
                    <button className="bg-sky-700 w-20 p-1 rounded-lg shadow-lg text-sm">
                        Previous
                    </button>
                </Link>
                <Link to="/quote/rate">
                    <button
                        className="bg-sky-700 w-14 p-1 rounded-lg shadow-lg text-sm"
                        onClick={handleSubmit}
                        disabled={!isFormValid}
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

export default UnderwritingQuestion;