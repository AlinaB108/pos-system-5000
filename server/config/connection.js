const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.5gxmekr.mongodb.net/`);

module.exports = mongoose.connection;
