const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,        
    },
    email: {
        type: String,
        unique: true,
        required: true,
        //match:[],
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    joined: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        required: true,
    }

    
})

const User = mongoose.model('users', usersSchema)
module.exports = User