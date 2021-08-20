const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {
      type: String,
      unique: true,
      trim: true, // trims whitespace if your user types something like " alex@123.com " into "alex@123.com"
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true
    }
  }, {
    timestamps: true,
    // A cool mongoose trick not to send password to clients!
    toJSON: {
      transform: function(doc, ret) {
        delete ret.password;
        return ret;
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
}
})

module.exports = mongoose.model('User', userSchema)