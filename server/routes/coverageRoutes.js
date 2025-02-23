const express = require("express");
const router = express.Router();
const {
    getCoverage, upsertCoverage, deleteCoverage, updateCoverage,
} = require("../controller/coverageController");

router.get('/:userId', getCoverage);
router.post('/', upsertCoverage);
router.delete('/:userId', deleteCoverage);
router.put('/:id', updateCoverage);

module.exports = router; 
