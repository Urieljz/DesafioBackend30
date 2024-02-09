const express = require("express");
const router = express.Router();
const Users = require("../models/users");

router.get("/", async (req, res) => {
  // Usamos async/await para esperar a que se resuelva la promesa que devuelve readFile (PROMISE)
  try {
    //const users = await readFile(); // Leemos el archivo db.json
    const users = await Users.find();
    res.send({ msg: "All users", data: users });
  } catch (error) {
    res.status(400).send({ msg: "Cannot get the users", error: error });
  }
});

router.post("/", async (req, res) => {

  try {
    const newUser = req.body;
    // console.log("newUser ", newUser);
    newUser.password = await Users.encryptPassword(newUser.password);
    // console.log('Encrypted password: ', newUser.password);
    const user = await Users.create(newUser);
    await user.save();
    res.status(201).send({ msg: "user created", data: user });
  } catch (error) {
    res.status(400).send({ msg: "user not created", error: error });
  }
});

module.exports = router;
