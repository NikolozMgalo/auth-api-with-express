const config = require("config.json");
const mongoose = require('mongoose');

mongoose.connection(process.enc.MONGODB_URI || config.connectionString);

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
}