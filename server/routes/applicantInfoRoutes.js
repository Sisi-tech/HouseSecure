const express = require("express");
const router = express.Router();
const {
    createApplicantInfo,
    getApplicantInfo,
    updateApplicantInfo,
    deleteApplicantInfo
} = require("../controller/applicantInfoController");

router.post("/", createApplicantInfo);
router.get("/:id", getApplicantInfo);
router.put("/:id", updateApplicantInfo);
router.delete("/:id", deleteApplicantInfo);

module.exports = router; 