const mongoose = require('mongoose');

// Define the Loss schema
const lossSchema = new mongoose.Schema({
  dateOfLoss: { type: Date, required: true },
  category: { type: String, enum: ['fire', 'water'], required: true },
  paidAmount: { type: Number, required: true },
  description: { type: String, required: true },
});

// Define the History schema
const historySchema = new mongoose.Schema({
  priorCarrier: { type: String, required: true },
  expirationDate: { type: Date, required: true },
  lapse: { type: String, enum: ['lapse', 'noLapse'], required: true },
  losses: [lossSchema], // Embed the Loss schema
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Connect the history with the user
}, { timestamps: true });


module.exports = mongoose.model("History", historySchema);