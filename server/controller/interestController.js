const Interest = require("../model/interest");
const User = require("../model/user");

const createInterest = async (req, res) => {
    const { interestType, name, mailingAddress, optionalAddress, city, state, postalCode, userId } = req.body;
    try {
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const interest = new Interest({
            interestType,
            name,
            mailingAddress,
            optionalAddress,
            city,
            state,
            postalCode,
            user: user._id,
        });
        await interest.save();
        res.status(201).json(interest);
    } catch (err) {
        res.status(500).json({ message: "Error saving interest", error: err.message });
    }
};

const getInterest = async (req, res) => {
    try {
        const interests = await Interest.find({ user: req.params.userId });
        if (!interests.length) {
            return res.status(404).json({ message: "No interests found" });
        }
        res.status(200).json(interests);
    } catch (err) {
        res.status(500).json({ message: "Error fetching interests", error: err.message });
    }
};

const updateInterest = async (req, res) => {
    try {
        const interest = await Interest.findById(req.params.id);
        if (!interest) {
            return res.status(404).json({ message: "Interest not found" });
        }
        delete req.body.user; // Prevent user modification
        Object.assign(interest, req.body);
        await interest.save();
        res.status(200).json(interest);
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
};

const deleteInterest = async (req, res) => {
    try {
        const interest = await Interest.findByIdAndDelete(req.params.id);
        if (!interest) {
            return res.status(404).json({ message: "Interest not found"});
        }
        res.status(200).json({ message: "Interest successfully deleted" });
    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
}

module.exports = { createInterest, getInterest, updateInterest, deleteInterest };
