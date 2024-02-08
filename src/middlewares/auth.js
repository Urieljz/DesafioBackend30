const express = require("express");
const router = express.Router();

const Users = require("../models/users");

router.post("/login", async (req, res) => {
  try {
    const bodyCredentials = req.body;
    const user = await Users.findOne({
      email: bodyCredentials.email,
    });
    res.status(201).send({ msg: "Usuario logeado" });
  } catch (err) {
    res.status(400).send({ msg: "Login inválido", error: err });
  }
});

module.exports = router;
