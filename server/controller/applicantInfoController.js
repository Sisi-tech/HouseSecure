const ApplicantInfo = require("../model/applicantInfo");
const User = require("../model/user");
const mongoose = require("mongoose");

const createApplicantInfo = async (req, res) => {
    try {
        const { userId } = req.body;
        const applicantInfo = req.body;
        const updatedApplicantInfo = await ApplicantInfo.findOneAndUpdate(
            { userId },
            { ...applicantInfo },
            { new: true, upsert: true, runValidators: true }
        );
        res.status(200).json({ applicantInfoId: updatedApplicantInfo._id, data: updatedApplicantInfo });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}


const getApplicantInfo = async (req, res) => {
    try {
        const  userId = req.params.id;
        console.log("req.params.user for get applicant info:", userId);
        if (!userId) {
            return res.status(404).json({ message: "User not found" });
        }
        const applicantInfo = await ApplicantInfo.findOne({ userId: userId });

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
            return res.status(404).json({ message: "ApplicantInfo not found" });
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

const deleteApplicantInfo = async (req, res) => {
    try {
        const applicantInfo = await ApplicantInfo.findByIdAndDelete(req.params.id);
        if (!applicantInfo) {
            return res.status(404).json({ message: 'ApplicantInfo not found'});
        }
        res.status(200).json({ message: "ApplicantInfo successfully deleted" });
    } catch (err) {
        res.status(400).json({ message: "Error deleting ApplicantInfo", error: err.message });
    }
}

module.exports = { createApplicantInfo, getApplicantInfo, updateApplicantInfo, deleteApplicantInfo };
