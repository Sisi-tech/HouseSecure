const mongoose = require('mongoose');

const coverageSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  
        required: true,  
    },
    coverageA: {
        type: Number,
        required: true,
        min: 0,
    },
    coverageB: {
        type: Number,
        required: true, 
        min: 0,
    },
    coverageC: {
        type: Number,
        required: true,
        min: 0,
    },
    coverageD: {
        type: Number,
        required: true,
        min: 0,
    },
    coverageE: {
        type: String,
        required: true,
    },
    ded: {
        type: String,
        required: true,
    },
    windDed: {
        type: String,
        required: true,
    },
    catDed: {
        type: String,
        required: true,
    },
    RCVonCoverageC: {
        type: String,
        default: null,
    },
    waterBackUp: {
        type: String,
        default: null,
    },
    equipment: {
        type: String,
        default: null,
    },
    ordinance: {
        type: String,
        default: null,
    },
    inflationGuard: {
        type: String,
        default: null,
    },
    burglarAlarm: {
        type: String,
        default: null,
    },
    fireAlarm: {
        type: String, 
        default: null,
    },
    sprinkler: {
        type: String,
        default: null,
    },
}, { timestamps: true});


module.exports =  mongoose.model("Coverage", coverageSchema);

