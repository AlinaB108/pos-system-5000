const mongoose = require('mongoose');

const { Schema } = mongoose;

const shiftSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    clockIn: {
        type: Date
    },
    clockOut: {
        type: Date
    },
    breakStart: {
        type: Date
    },
    breakEnd: {
        type: Date
    }
});

const Shift = mongoose.model('Shift', shiftSchema);
module.exports = Shift; 