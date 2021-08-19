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
    language: {
        type: String,
        enum: ['Italian', 'Hindi', 'Russian', 'Mandarin', 'Arabic', 'Urdu', 'German', 'Spanish', 'Tagalog', 'English', 'Polish', 'Korean', 'Persian', 'Greek', 'Japanese', 'Vietnamese'],
        required: true

    },
    hobbies: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },


})

module.exports = mongoose.model('User', userSchema)