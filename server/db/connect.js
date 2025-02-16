const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.set('strictQuery', false);

const connectDB = (url) => {
    if (!url) {
        throw new Error("Database connection string is undefined. Check your environment variables.");
    }
    return mongoose.connect(url, {
        serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
        console.log("Connected to the DB ...");
    })
    .catch((err) => {
        console.error("Database connection Error: ", err);
        process.exit(1);
    })
}

module.exports = connectDB;


