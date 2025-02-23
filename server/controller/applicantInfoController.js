const ApplicantInfo = require("../model/applicantInfo");
const User = require("../model/user");

const createApplicantInfo = async (req, res) => {
    const { effectiveDate, entityType, policyForm, occupancyType, lossHistory, firstName, lastName, partnership, jointVenture, llc, corporation, trust } = req.body;
    const userId = req.body.user;
    console.log("req.body:", req.body);
    console.log("UserId:", userId);
    
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (entityType === "individual") {
            if (!firstName || !lastName) {
                return res.status(400).json({ message: "First name and last name are required for individuals." });
            }
        }

        const applicantInfoData = {
            effectiveDate,
            entityType,
            policyForm,
            occupancyType,
            lossHistory,
            user: user._id,
        };

        // Validate and assign additional fields based on entityType
        if (entityType === "individual") {
            applicantInfoData.individual = { firstName, lastName };
        } else if (entityType === "Partnership") {
            applicantInfoData.partnership = partnership;
        } else if (entityType === "Joint Venture") {
            applicantInfoData.jointVenture = jointVenture;
        } else if (entityType === "Limited Liability Corporation") {
            applicantInfoData.llc = llc;
        } else if (entityType === "corporation") {
            applicantInfoData.corporation = corporation;
        } else if (entityType === "trust") {
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
        const userId = req.params.user;
        const applicantInfo = await ApplicantInfo.findOne({ user: userId });
        console.log("req.params.user:", userId);
        if (!userId) {
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
