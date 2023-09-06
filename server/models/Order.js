const mongoose = require('mongoose');

const { Schema } = mongoose;
const Menu = require('./Menu')

const orderSchema = new Schema({
    method: {
        type: String,
        required: true
    },
    items: [Menu.schema],
    time: {
        type: Date,
        default: Date.now
    }

});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order; 