const Interest = require("../model/interest");
const User = require("../model/user");

const createInterest = async (req, res) => {
    try {
        const { userId } = req.params;
        const interestData = req.body;
        const updatedInterest = await Interest.findOneAndUpdate(
            userId,
            {...interestData},
            { new: true, upsert: true, runValidators: true }
        );
        res.status(200).json({ coverageId: updatedInterest._id, data: updatedInterest });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

const getInterest = async (req, res) => {
    try {
        const userId = req.params.user;
        const interests = await Interest.findOne({ user: userId });
        if (!interests) {
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
        Object.keys(req.body).forEach(key => {
            if (req.body[key] !== undefined) {
                coverage[key] = req.body[key];
            }
        });
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
