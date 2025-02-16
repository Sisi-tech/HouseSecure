const mongoose = require("mongoose");
const User = require("./model/user"); // Adjust path as needed
require("dotenv").config();

const insertTestUser = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Database connected successfully!");

        const testUser = new User({
            firstName: "Test",
            lastName: "User",
            email: "testuser@example.com",
            password: "Password123"
        });

        await testUser.save();
        console.log("Test user inserted successfully!");

        mongoose.connection.close();
    } catch (error) {
        console.error("Error inserting test user:", error);
    }
};

insertTestUser();
