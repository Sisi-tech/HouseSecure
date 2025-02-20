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
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true, // Ensures each location is tied to a specific user
    },
});

module.exports = mongoose.model("Interest", interestSchema);