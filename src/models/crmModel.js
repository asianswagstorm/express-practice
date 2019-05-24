//Customer-relationship management
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    fname: {
        type: String,
        required: 'Enter your first name'
    },
    lname: {
        type: String,
        required: 'Enter your last name'
    },   
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }


});

module.exports = ContactSchema;