const mongoose = require("mongoose");

const ApplicantInfoSchema = new mongoose.Schema(
    {
        effectiveDate: {
            type: Date,
            required: [true, "Error: no effective date provided"],
        },
        entityType: {
            type: String,
            required: [true, "Error: no entity type provided"],
            enum: [
                "individual",
                "Partnership",
                "Joint Venture",
                "Limited Liability Corporation",
                "corporation",
                "trust",
            ],
        },
        individual: {
            firstName: {
                type: String,
                validate: {
                    validator: function(value) {
                        return this.entityType !== "individual" || (value && value.trim() !== "");
                    },
                    message: "First name is required for individuals.",
                },
            },
            lastName: {
                type: String,
                validate: {
                    validator: function(value) {
                        return this.entityType !== "individual" || (value && value.trim() !== "");
                    },
                    message: "Last name is required for individuals.",
                },
            },
        },
        partnership: {
            type: String,
            required: function() {
                return this.entityType === "Partnership";
            },
        },
        jointVenture: {
            type: String,
            required: function() {
                return this.entityType === "Joint Venture";
            },
        },
        llc: {
            type: String,
            required: function() {
                return this.entityType === "Limited Liability Corporation";
            },
        },
        corporation: {
            type: String,
            required: function() {
                return this.entityType === "corporation";
            },
        },
        trust: {
            type: String,
            required: function() {
                return this.entityType === "trust";
            },
        },
        policyForm: {
            type: String,
            required: [true, "Error: no policy form is provided"],
        },
        occupancyType: {
            type: String,
            required: [true, "Error: no occupancy type is provided"],
        },
        lossHistory: {
            type: String,
            required: [true, "Error: no loss history is provided"],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    { timestamps: true } // Automatically add createdAt and updatedAt fields
);

module.exports = mongoose.model("ApplicantInfo", ApplicantInfoSchema);
