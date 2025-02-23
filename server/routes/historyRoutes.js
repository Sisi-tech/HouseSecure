const express = require('express');
const router = express.Router();
const {
    createHistory,
    getHistory,
    updateHistory,
    deleteHistory,
} = require('../controller/historyController');

router.post('/', createHistory);
router.get('/:userId', getHistory);
router.put('/:id', updateHistory);
router.delete('/:user', deleteHistory);

module.exports = router;
