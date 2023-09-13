const mongoose = require('mongoose');

const { Schema } = mongoose;

const shiftSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    currentShift: {
        type: Boolean,
        required: true,
        default: false
    },
    clockedIn: {
        type: Boolean,
        required: true,
        default: false
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