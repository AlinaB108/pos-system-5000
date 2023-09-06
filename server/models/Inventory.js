const mongoose = require('mongoose');

const { Schema } = mongoose;

const inventorySchema = new Schema({
    item: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true
    },
    stockDate: {
        type: Date,
        required: true
    }
});

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory; 