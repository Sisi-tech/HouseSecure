const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
    interestType: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    mailingAddress: {
        type: String,
        required: true,
    },
    optionalAddress: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Interest", interestSchema);