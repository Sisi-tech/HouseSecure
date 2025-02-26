const mongoose = require("mongoose");

const ApplicantInfoSchema = new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        selectedDate: {
            type: Date,
            required: [true, "Error: no effective date provided"],
            validate: {
                validator: function(v) {
                    return v && v >= new Date();
                },
                message: props => `${props.value}`
            }
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
                        // Access the document instance using 'this'
                        return this.entityType !== 'individual' || value != null;
                    },
                    message: 'First name is required for individuals.',
                },
            },
            lastName: {
                type: String,
                validate: {
                    validator: function(value) {
                        // Access the document instance using 'this'
                        return this.entityType !== 'individual' || value != null;
                    },
                    message: 'Last name is required for individuals.',
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
                return this.entityType === "joint Venture";
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
    },
    { timestamps: true } // Automatically add createdAt and updatedAt fields
);

module.exports = mongoose.model("ApplicantInfo", ApplicantInfoSchema);
