const { response } = require("express");
const UnderwritingResponse = require("../model/question");
const User = require("../model/user");

const submitResponses = async (req, res) => {
    try {
        const { responses } = req.body;
        const userId = req.body.userId;
        const formattedResponses = Array.isArray(responses)
            ? responses
            : Object.entries(responses).map(([question, answer]) => ({
                question, answer
            }));
        console.log("Formatted responses:", formattedResponses);

        // Validate the responses
        for (const response of formattedResponses) {
            if (!response.question || !response.answer) {
                return res.status(400).json({ error: "Each response must have a question and an answer" });
            }
        }
        const updatedResponse = await UnderwritingResponse.findOneAndUpdate(
            { user: userId },
            { responses: formattedResponses },
            { new: true, upsert: true, runValidators: true }
        );
        res.status(200).json({ 
            message: "Responses submitted successfully",
            responseId: updatedResponse._id, 
            data: updatedResponse,
        });
    } catch (error) {
        console.error("Error in submitResponses:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getResponses = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log("user to get response:", userId );
        const userResponses = await UnderwritingResponse.find({ user: userId });
        if (!userResponses.length) {
            return res.status(404).json({ message: "No responses found for this user" });
        }
        res.status(200).json(userResponses);
    } catch (error) {
        res.status(500).json({ error: "Server error", message: error.message });
    }
};

const updateResponse = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log("userId to update:", userId);
        const { responses } = req.body;
        if (!responses || !Array.isArray(responses)) {
            return res.status(400).json({ error: "Invalid request data" });
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found"});
        }
        for (const response of responses) {
            if (!response.question || !response.answer) {
                return res.status(400).json({ error: "Each response must have a question"})
            }
        }
        const updatedResponse = await UnderwritingResponse.findOneAndUpdate(
            { user: userId },
            { responses },
            { new: true, upsert: true }
        );
        res.status(200).json({ message: "Response updated successfully", data: updatedResponse });
    } catch (error) {
        res.status(500).json({ error: "Server error", message: error.message });
    }
};

const deleteResponse = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log("user to get response:", req.params.user);
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found"});
        }
        const deleteResponse = await UnderwritingResponse.deleteMany({ user: req.params.user });
        if (deleteResponse.deletedCount === 0) {
            return res.status(404).json({ message: "No responses found to delete"});
        }
        res.status(200).json({ message: "Responses deleted successfully"});
    } catch (error) {
        res.status(500).json({ error: "Server error", message: error.message });
    }
};

module.exports = { submitResponses, getResponses, updateResponse, deleteResponse };

