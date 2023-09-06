const mongoose = require('mongoose');

const { Schema } = mongoose;
const Inventory = require('./Inventory')

const menuSchema = new Schema({
    item: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: [Inventory.schema],
    quantity: {
        type: Number,
        required: true
    }
});

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu; 