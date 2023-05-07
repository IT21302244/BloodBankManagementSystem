const mongoose = require('mongoose');

const containerSchema = new mongoose.Schema({
    containerno:{
        type: Number,
        required: true,
        unique: true,
    },
    fullname:{
       
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    bloodType:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Container', containerSchema);
