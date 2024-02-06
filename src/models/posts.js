const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        //required: true,
        //unique: true,
        //match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Ingresa un correo valido: ejemplo juan.perez@gmail.com']
    },
    contenido: {
        type: String,
        //required: true
    }
})

const Post = mongoose.model('posts', postsSchema)

module.exports = Post