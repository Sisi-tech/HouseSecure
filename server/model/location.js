const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema(
    {
        address1: {
            type: String,
            required: [true, "Address line 1 is required"],
        },
        address2: {
            type: String,
        },
        zipCode: {
            type: String,
            required: [true, "Zip code is required"],
        },
        city: {
            type: String,
            required: [true, "City is required"],
        },
        state: {
            type: String,
            required: [true, "State is required"],
        },
        distanceToCoast: {
            type: String,
            required: [true, "Distance to the coast is required"],
        },
        rental: {
            type: String,
            required: [true, "Rental information is required"],
        },
        numOfFamily: {
            type: String,
            required: [true, "Number of families is required"],
        },
        townhouse: {
            type: String,
            required: [true, "Townhouse information is required"],
        },
        sqft: {
            type: Number,
            required: [true, "Total sqft is required"],
        },
        constructionType: {
            type: String,
            required: [true, "Construction type is required"],
        },
        protectionClass: {
            type: String,
            required: [true, "Protection class is required"],
        },
        yearBuilt: {
            type: Number,
            required: [true, "Year built is required"],
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true, // Ensures each location is tied to a specific user
        },
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);


module.exports = mongoose.model("Location", LocationSchema);
