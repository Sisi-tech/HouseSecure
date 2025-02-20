const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    applicantInfo: { type: mongoose.Schema.Types.ObjectId, ref: "ApplicantInfo" },
    location: { type: mongoose.Schema.Types.ObjectId, ref: "location" },
    history: { type: mongoose.Schema.Types.ObjectId, ref: "history" },
    coverage: { type: mongoose.Schema.Types.ObjectId, ref: "coverage" },
    interest: { type: mongoose.Schema.Types.ObjectId, ref: "interest" },
    questions: { type: mongoose.Schema.Types.ObjectId, ref: "question" }, // Corrected here
});

module.exports = mongoose.model("Quote", QuoteSchema);
