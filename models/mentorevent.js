const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    dateTime: {
        type: String,
        required: true
    },
    link: {
        type: String,
        default: {mentorId}
    },
    mentorId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Mentor'
    }

})

module.exports = mongoose.model('Event', eventSchema)