const express = require('express')
const router = express.Router()
//const { auth } = require('../middlewares/authentication')
const Posts = require('../models/posts')
//const UserController = require('../controllers/users')

//router.get('/', auth, UserController.getAll)

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find()
        //console.log(posts)
        res.send({ msg: "All Posts", data: posts })
    } catch (error) {
        res.status(400).send({ msg: "can't get users", error: error }) 
    }  
})

module.exports = router