const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    posID: {
        type: Number,
        required: true,
        unique: true
    },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }],
    tables: [{
        type: Schema.Types.ObjectId,
        ref: 'Table'
    }],
    shifts:[{
        type: Schema.Types.ObjectId,
        ref: 'Shift'
    }]
});

// set up pre-save middleware to create password
employeeSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
employeeSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
