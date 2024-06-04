const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://bryanGC96:admin00@cluster0.inpfykd.mongodb.net/');

module.exports = mongoose.connection;

