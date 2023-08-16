const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    type: String,
    amount: Number,
    date: Date,
    details: String,
});

module.exports = mongoose.model('Transaction', transactionSchema, 'transactions');

