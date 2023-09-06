const mongoose = require('mongoose');

const { Schema } = mongoose;
const Order = require ('./Order'); 

const tableSchema = new Schema({
    table: {
        type: Number,
        required: true
    },
    orders: [Order.schema]
});

const Table = mongoose.model('Table', tableSchema);
module.exports = Table; 