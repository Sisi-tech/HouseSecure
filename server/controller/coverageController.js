const Coverage = require("../model/coverage");

const getCoverage = async (req, res) => {
    try {
        const { userId } = req.params;
        const coverage = await Coverage.findOne({ userId });

        if (!coverage) {
            return res.status(404).json({ message: "Coverage not found for this user" });
        }
        res.status(200).json(coverage);
    } catch (error) {
        res.status(500).json({ message: 'Server error', message: error.message });
    }
};

const upsertCoverage = async (req, res) => {
    try {
        const { userId } = req.params;
        const coverageData = req.body;

        const updatedCoverage = await Coverage.findOneAndUpdate(
            { userId },
            { ...coverageData, userId },
            { new: true, upsert: true, runValidators: true }
        );
        res.status(200).json(updatedCoverage);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

const deleteCoverage = async (req, res) => {
    try {
        const { userId } = req.params;
        const deletedCoverage = await Coverage.findOneAndDelete({ userId });
        if (!deletedCoverage) {
            return res.status(404).json({ message: 'Coverage not found for this user'});
        }
        res.status(200).json({ message: 'Coverage deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { getCoverage, upsertCoverage, deleteCoverage };
