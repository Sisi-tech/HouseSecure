const express = require("express");
const Quote = require("../model/quote");

const submitQuote = async (req, res) => {
    try {
        const { applicantId, locationId, historyId, coverageId, interestId, responseId } = req.body;
        if (!applicantId || !locationId || !historyId || !coverageId || !interestId || !responseId ) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const quote = new Quote({
            applicantInfo: applicantId,
            location: locationId,
            history: historyId,
            coverage: coverageId,
            interest: interestId,
            question: responseId,
        });
        await quote.save();
        res.status(201).json({ message: "Quote saved successfully", quote });
    } catch (err) {
        res.status(500).json({ error: "Error submitting quote" });
    }
};

module.exports = { submitQuote };