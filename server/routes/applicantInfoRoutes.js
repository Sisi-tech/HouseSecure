const express = require("express");
const router = express.Router();
const {
    createApplicantInfo,
    getApplicantInfo,
    updateApplicantInfo,
} = require("../controller/applicantInfoController");

router.post("/", createApplicantInfo);
router.get("/:user", getApplicantInfo);
router.put("/:id", updateApplicantInfo);

module.exports = router; 