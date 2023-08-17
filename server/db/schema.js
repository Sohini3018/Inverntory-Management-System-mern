const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    phNo: String,
    email: String,
    password: String
});

module.exports = mongoose.model('users', userSchema);