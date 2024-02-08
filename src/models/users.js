const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

    
},
{
    timestamps: true,
    statics: {
        encryptPassword: async (password) => {
            const salt = await bcrypt.genSalt(15) // salt es el numero de veces que se va a encriptar la contraseña
            return await bcrypt.hash(password, salt) // Encriptamos la contraseña
        },
        isValidPassword: async (password, hash) => {
            return await bcrypt.compare(password, hash)
        }
    }

})

const User = mongoose.model('users', usersSchema)
module.exports = User