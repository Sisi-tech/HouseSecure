const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors/bad_request");
const { UnauthenticatedError } = require("../errors/unauthenticated");
const { NotFoundError } = require("../errors/not_found");
const User = require("../model/user");
const { sendEmail } = require("../utils/emails");


const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone } = req.body;
        const user = new User({
            firstName,
            lastName,
            email,
            password,
            phone,
        });
        await user.save();
        const token = user.createJWT();
        res.status(StatusCodes.CREATED).json({
            user: { id: user._id, name: `${user.firstName} ${user.lastName}`},
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error registering user"});
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new BadRequestError("Please provide email and password");
        }
        // find user by email
        const user = await User.findOne({ email: email.toLowerCase() });
        console.log("Found user:", user);
        if (!user) {
            throw new UnauthenticatedError("Invalid credentials");
        }
        // compare passwords
        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            throw new UnauthenticatedError("Invalid credentials");
        }
        // generate JWT token and response
        const token = user.createJWT();
        const expiresIn = process.env.JWT_EXPIRES_IN || 3600;
        res.cookie("token", token, {
            maxAge: parseInt(expiresIn) * 1000,
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            sameSite: "strict"
        });
        res.status(StatusCodes.OK).json({
            user: { id: user._id, name: `${user.firstName} ${user.lastName}`},
            token,
        });
     } catch (error) {
        next(error);
     }
}

// Request password rest (send email with reset token)
const requestPasswordReset = async (req, res) => {
    const { email } = req.body;
    console.log("Email received:", email);
    if (!email) {
        throw new BadRequestError("Please provide an email address.");
    }
    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        throw new NotFoundError("User with this email does not exists.");
    }
    // generate a reset token (secure token)
    const resetToken = crypto.randomBytes(20).toString("hex");
    // set reset token and expiration date(e.g., 1 hour)
    user.passwordResetToken = resetToken;
    user.passwordResetExpires = Date.now() + 3600000; // 1 hour
    try {
        await User.updateOne(
            { _id: user._id},
            {
                passwordResetToken: resetToken,
                passwordResetExpires: Date.now() + 3600000,
            }
        );
        console.log("Password reset token and expiration updated successfully.");
    } catch (error) {
        console.error("Error updating password reset info:", error);
    }
    // send email with reset token
    const isProduction = process.env.NODE_ENV === "production";
    console.log(`Running in ${process.env.NODE_ENV} mode`);
    const resetUrl = isProduction
    ? 'https://production-domain.com/resetPassword/'
    : 'http://localhost:5173/resetpassword/';
    const message = `Click the following link to reset your password: ${resetUrl}${resetToken}`;
    try {
        await sendEmail({
            to: email,
            subject: "Password Reset Request",
            message,
        });
        console.log("Email sent successfully.");
        res.status(StatusCodes.OK).json({ msg: "Password reset email sent" });
    } catch (error) {
        console.error("Error details:", error);
        throw new BadRequestError("Error sending password reset email");
    }
};

// Reset password 
const resetPassword = async (req, res) => {
    const { resetToken, newPassword } = req.body;

    console.log("Received resetToken:", resetToken);
    console.log("Received newPassword:", newPassword);

    if (!resetToken || !newPassword) {
        throw new BadRequestError("Please provide a valid token and new password.");
    }
    // find user with the reset token
    const user = await User.findOne({
        passwordResetToken: resetToken,
        passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) {
        throw new NotFoundError("Invalid or expired password reset token.");
    }
    console.log("User found, resetting password...");

    // hash the new password
    user.password = await bcrypt.hash(newPassword, 12),
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    try {
        await user.save(); // save the updated user 
        res.status(StatusCodes.OK).json({ msg: "Password reset successful" });
    } catch (error) {
        console.error("Error saving user after password reset:", error);
        throw new BadRequestError("Error saving new password");
    }
};

module.exports = {
    register,
    login, 
    requestPasswordReset,
    resetPassword,
};
