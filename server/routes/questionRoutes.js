const express = require("express");
const { deleteHistory } = require("../controller/historyController");
const router = express.Router();
const {
    submitResponses,
    getResponses,
    updateResponse,
    deleteResponse,
} = require("../controller/questionController");

router.post('/', submitResponses);
router.get('/:userId', getResponses);
router.put('/:userId', updateResponse);
router.delete('/:userId', deleteResponse);

module.exports = router;

