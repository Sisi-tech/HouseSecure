const express = require("express");
const router = express.Router();
const {
    submitQuote
} = require("../controller/quoteController");

router.post("/", submitQuote);

module.exports = router;
