const ApplicantInfo = require("../model/applicantInfo");
const User = require("../model/user");

const createApplicantInfo = async (req, res) => {
    const { effectiveDate, entityType, policyForm, occupancyType, lossHistory, userId, firstName, lastName, partnership, jointVenture, llc, corporation, trust } = req.body;
    
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const applicantInfoData = {
            effectiveDate,
            entityType,
            policyForm,
            occupancyType,
            lossHistory,
            user: user._id,
        };

        // Standardize entityType to lowercase
        const entityTypeLower = entityType?.toLowerCase();

        // Validate and assign additional fields based on entityType
        if (entityTypeLower === "individual") {
            if (!firstName || !lastName) {
                return res.status(400).json({ message: "First name and last name are required for individuals." });
            }
            applicantInfoData.individual = { firstName, lastName };
        } else if (entityTypeLower === "partnership") {
            if (!partnership) return res.status(400).json({ message: "Partnership details are required." });
            applicantInfoData.partnership = partnership;
        } else if (entityTypeLower === "joint venture") {
            if (!jointVenture) return res.status(400).json({ message: "Joint Venture details are required." });
            applicantInfoData.jointVenture = jointVenture;
        } else if (entityTypeLower === "limited liability corporation") {
            if (!llc) return res.status(400).json({ message: "LLC details are required." });
            applicantInfoData.llc = llc;
        } else if (entityTypeLower === "corporation") {
            if (!corporation) return res.status(400).json({ message: "Corporation details are required." });
            applicantInfoData.corporation = corporation;
        } else if (entityTypeLower === "trust") {
            if (!trust) return res.status(400).json({ message: "Trust details are required." });
            applicantInfoData.trust = trust;
        }

        const applicantInfo = new ApplicantInfo(applicantInfoData);
        await applicantInfo.save();

        res.status(201).json({ _id: applicantInfo._id, ...applicantInfoData });
    } catch (err) {
        res.status(400).json({ message: "Error saving applicantInfo", error: err.message });
    }
};

const getApplicantInfo = async (req, res) => {
    try {
        const applicantInfo = await ApplicantInfo.findOne({ user: req.params.userId });
        if (!applicantInfo) {
            return res.status(404).json({ message: "ApplicantInfo not found" });
        }
        res.status(200).json(applicantInfo);
    } catch (err) {
        res.status(400).json({ message: "Error fetching applicantInfo", error: err.message });
    }
};

const updateApplicantInfo = async (req, res) => {
    try {
        const applicantInfo = await ApplicantInfo.findById(req.params.id);
        if (!applicantInfo) {
            return res.status(404).json({ message: "ApplicantInfo not found"});
        }

        // Update only defined fields to avoid setting undefined values
        Object.keys(req.body).forEach(key => {
            if (req.body[key] !== undefined) {
                applicantInfo[key] = req.body[key];
            }
        });

        await applicantInfo.save();
        res.status(200).json(applicantInfo);
    } catch (err) {
        res.status(400).json({ message: "Error updating applicantInfo", error: err.message });
    }
};

module.exports = { createApplicantInfo, getApplicantInfo, updateApplicantInfo };
