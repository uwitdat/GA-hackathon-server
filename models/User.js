const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    nativeLan: {
        type: String,
        enum: ['Italian', 'Hindi', 'Russian'],
        required: true

    }


})

module.exports = mongoose.model('User', userSchema)