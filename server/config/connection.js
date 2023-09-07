const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://root:root@cluster0.stk0aow.mongodb.net/sidekick`);

module.exports = mongoose.connection;
