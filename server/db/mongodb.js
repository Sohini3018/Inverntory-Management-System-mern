const mongoose = require('mongoose');
require('./config.js');
const loginModel = require('./schema.js');
async function dbConnect() {
    const data = await loginModel.find();
}

module.exports = dbConnect;
