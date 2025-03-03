const Coverage = require("../model/coverage");

const upsertCoverage = async (req, res) => {
    try {
        const { userId } = req.params;
        const coverageData = req.body;

        const updatedCoverage = await Coverage.findOneAndUpdate(
            userId,
            { ...coverageData },
            { new: true, upsert: true, runValidators: true }
        );
        res.status(200).json({ coverageId: updatedCoverage._id, data: updatedCoverage });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

const getCoverage = async (req, res) => {
    try {
        const userId = req.params.user;
        const coverage = await Coverage.findOne({ user: userId });

        if (!coverage) {
            return res.status(404).json({ message: "Coverage not found for this user" });
        }
        res.status(200).json(coverage);
    } catch (error) {
        res.status(500).json({ message: 'Server error', message: error.message });
    }
};


const updateCoverage = async (req, res) => {
    try {
        const coverage = await Coverage.findById(req.params.id);
        if (!coverage) {
            return res.status(404).json({ message: "Coverage not found"});
        }
        Object.keys(req.body).forEach(key => {
            if (req.body[key] !== undefined) {
                coverage[key] = req.body[key];
            }
        });
        await coverage.save();
        res.status(200).json(coverage);
    } catch (err) {
        res.status(400).json({ message: "Error updating coverage", error: err.message });
    }
};

const deleteCoverage = async (req, res) => {
    try {
        const userId = req.params.user;
        const deletedCoverage = await Coverage.findOneAndDelete({ user: userId });
        if (!deletedCoverage) {
            return res.status(404).json({ message: 'Coverage not found for this user'});
        }
        res.status(200).json({ message: 'Coverage deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { getCoverage, upsertCoverage, deleteCoverage, updateCoverage };
