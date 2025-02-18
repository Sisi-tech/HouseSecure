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
router.put('/:id', updateResponse);
router.delete('/:id', deleteHistory);

module.exports = router;

