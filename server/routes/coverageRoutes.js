const express = require("express");
const router = express.Router();
const {
    getCoverage, upsertCoverage, deleteCoverage
} = require("../controller/coverageController");

router.get('/:userId', getCoverage);
router.post('/:userId', upsertCoverage);
router.delete('/:userId', deleteCoverage);

module.exports = router; 
