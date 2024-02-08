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
//GetById
router.get('/:id', async (req, res) => {

    const {id} = req.params
    try {
     
      const postId = await Posts.findById(id)
      res.send({ msg:'post', data: postId})
      
    } catch (error) {
      res.status(400).send({msg:"post not found", data:{}})
    }
  
})


//==============

// create a new post
router.post('/', async (req, res) => {
    try {
        const newPost = req.body
        // console.log('newPost ', newPost);
        const post = await Posts.create(newPost)
        // console.log('post ', post);
        await post.save()


        res.status(201).send({ msg: "Post created", data: post })
    } catch (error) {
        console.log('error ', error);
        res.status(400).send({ msg: "can't create post", error: error })
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        //const postToDelete = await Posts.findById(id)
        const posts = await Posts.findByIdAndDelete(id)
        //console.log(posts)
        res.send({ msg: "Post deleted", data: posts })
    } catch (error) {
        res.status(400).send({ msg: "can't delete post", error: error })
    }
})


router.post('/', async (req,res)=>{
    try {
        const newUser = req.body
        const user = await User.create(newUser)
        await user.save()
        res.status(201).send({msg:"user created", data: user})

    } catch (error) {
    res.status(400).send({msg:"user not created",error:error})
    }
})

module.exports = router