const express = require("express");
const router = express.Router();

const Posts = require("../models/posts");
//const UserController = require('../controllers/users')

//router.get('/', auth, UserController.getAll)

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find().populate("user");
    //console.log(posts)
    res.send({ msg: "All Posts", data: posts });
  } catch (error) {
    res.status(400).send({ msg: "can't get users", error: error });
  }
});
//GetById
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const postId = await Posts.findById(id).populate("user");
    res.send({ msg: "post", data: postId });
  } catch (error) {
    res.status(400).send({ msg: "post not found", data: {} });
  }
});

//==============
// const { verifyJWT } = require("../middlewares/authentication");
// router.use(verifyJWT);
// create a new post
router.post("/", async (req, res) => {
  try {
    let newPost = req.body;
    // newPost.user = req.user._id;
    console.log("newPost ", newPost);
    const post = await Posts.create(newPost);
    // console.log('post ', post);
    await post.save();

    res.status(201).send({ msg: "Post created", data: post });
  } catch (error) {
    console.log("error ", error);
    res.status(400).send({ msg: "can't create post", error: error });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  let actualization = req.body;
  try {
    const updatePost = await Posts.findByIdAndUpdate(
      { _id: id },
      { $set: actualization },
      { new: true }
    );
    res.send({ msg: "Post update", data: updatePost });
  } catch (error) {
    res.status(400).send({ msg: "user not found", data: {} });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    //const postToDelete = await Posts.findById(id)
    const posts = await Posts.findByIdAndDelete(id);
    //console.log(posts)
    res.send({ msg: "Post deleted", data: posts });
  } catch (error) {
    res.status(400).send({ msg: "can't delete post", error: error });
  }
});

module.exports = router;
