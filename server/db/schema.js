const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    name: String,
    phNo: Number,
    email: String,
    password: String
});

module.exports = mongoose.model('users', loginSchema);