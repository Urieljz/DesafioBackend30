const express = require("express");
const router = express.Router();

const Users = require("../models/users");
const { createJWT } = require("./authentication");

router.post("/login", async (req, res) => {
  try {
    const bodyCredentials = req.body;
    const user = await Users.findOne({
      email: bodyCredentials.email,
    });
    if (!user) {
      return res.status(401).send({ msg: "Usuario no encontrado" });
    }
    if (user.password != bodyCredentials.password) {
      return res.status(401).send({ msg: "Contraseña incorrecta" });
    } else {
      const token = createJWT({ _id: user._id });
      return res.status(201).send({ msg: "Login successful", data: token });
    }
  } catch (err) {
    res.status(400).send({ msg: "Login inválido", error: err });
  }
});

module.exports = router;
