const express = require("express");
const router = express.Router();
const {
    submitQuote,
    getQuote,
} = require("../controller/quoteController");

router.post("/", submitQuote);
router.get("/:userId", getQuote);

module.exports = router;
