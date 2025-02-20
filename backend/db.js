const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kiran741:lrWwT9TvPKGksSiN@kiran18.pxoevpf.mongodb.net/payTm');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }

})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}
