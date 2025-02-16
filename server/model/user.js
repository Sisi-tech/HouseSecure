const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: [true, "Please provide your first name"],
            minlength: 1,
            maxlength: 50,
        },
        lastName: {
            type: String,
            trim: true,
            required: [true, "Please provide last name"],
            minlength: 1,
            maxlength: 50,
        },
        email: {
            type: String,
            required: [true, "Please provide email address"],
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Please provide a valid email",
            ],
            lowercase: true,
            unique: true,
            index: true,
        },
        password: {
            type: String,
            required: [true, "Please provide password."],
            minlength: 8,
            validate: {
                validator: function (value) {
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(value);
                },
                message:
                    "Password must include at least one uppercase letter, one lowercase letter, and one number",
            },
        },
        passwordResetToken: String,
        passwordResetExpires: Date,
    },
    {timestamps: true}
);

UserSchema.pre("save", async function (next) {
    this.firstName = this.firstName.trim();
    this.lastName = this.lastName.trim();
    this.email = this.email.toLowerCase().trim();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.createJWT = function() {
    return jwt.sign(
        { userId: this._id, firstName: this.firstName, lastName: this.lastName },
        process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.JWT_LIFETIME }
    );
};

UserSchema.methods.comparePassword = async function (userPassword) {
    return await bcrypt.compare(userPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);