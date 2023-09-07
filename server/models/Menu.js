const mongoose = require('mongoose');

const { Schema } = mongoose;
const Category = require('./Category');

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
    ingredients: {
        type: Array,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: [Category.schema]
});

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu; 

// MAKE CATEGORIES