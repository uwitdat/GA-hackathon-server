const mongoose = require('mongoose')

const tutorSchema = new mongoose.Schema({
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

    },
    datesAvail: {

    }

})

module.exports = mongoose.model('Tutor', tutorSchema)