const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,        
    },
    contenido: {
        type: String,
        required: true,
    },
    postImage: {
        type: String,
        required: true,
    },
    hashtags: {
        type: Array,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    // username: {
    //     type: Schema.Types.ObjectId,
    //     ref:'user'
    // },
    // relevant: {
    //     type: Boolean,
    //     required: false,
    // }
})

const Post = mongoose.model('posts', postsSchema)
module.exports = Post