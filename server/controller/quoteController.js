const express = require("express");
const Quote = require("../model/quote");

const submitQuote = async (req, res) => {
    try {
        console.log("request body:", req.body);
        const { userId, applicantInfoId, locationId, historyId, coverageId, interestId, responseId } = req.body;
        console.log('Destructured Values:', { userId, applicantInfoId, locationId, historyId, coverageId, interestId, responseId });
        console.log("applicantId:", applicantInfoId);
        if (!userId || !applicantInfoId || !locationId || !historyId || !coverageId || !interestId || !responseId ) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const quote = new Quote({
            userId,
            applicantInfo: applicantInfoId,
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

const getQuote = async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log("Get quote user id:", userId);
        const quote = await Quote.findOne({ userId: userId });
        if (!quote) {
            return res.status(404).send("Quote not found");
        }
        res.status(200).send(quote);
    } catch (err) {
        res.status(400).send('Error fetching quote: ' + err);
    }
}


module.exports = { submitQuote, getQuote };