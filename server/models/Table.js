const mongoose = require('mongoose');

const { Schema } = mongoose;
const Menu = require('./Menu')


const tableSchema = new Schema({
    tableNum: {
        type: Number,
        required: true
    },
    order: [Menu.schema],
    orderStatus: {
        type: Boolean,
        default: false,
    },
    tip: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    },
    tableStatus: {
        type: Boolean,
        default: true,
        required: true,
    }
});

const Table = mongoose.model('Table', tableSchema);
module.exports = Table; 