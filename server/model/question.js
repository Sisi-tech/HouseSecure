const mongoose = require("mongoose");
const User = require("../model/user");

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, enum: ["yes", "no"], required: true },
});

const underwritingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    responses: { type: [questionSchema], required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("UnderwritingResponse", underwritingSchema);
