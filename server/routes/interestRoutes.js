const express = require("express");
const router = express.Router();
const {
    createInterest,
    getInterest,
    updateInterest,
    deleteInterest,
} = require("../controller/interestController");

router.post('/', createInterest);
router.get('/:userId', getInterest);
router.put('/:id', updateInterest);
router.delete('/:id', deleteInterest);

module.exports = router;