// in backend/controllers/user.js
// Importar bcrypt per al Hash de contrassenya.
const bcrypt = require("bcrypt");
//Importar jsonwebtoken per la creació del TOKEN.
const jwt = require("jsonwebtoken");
//Importar el model d'Usuari.
const User = require("../models/User");
// Importar dotenv.
const dotenv = require("dotenv").config();
//Importar crypto per encriptar email.
const cryptojs = require("crypto-js");


exports.signup = (req, res, next) => {
  // Encriptar email.
  // const emailCrypt = cryptojs
  //   .HmacSHA256(req.body.email, `${process.env.CLAU_LIAME}`)
  //   .toString();
  // Hash de contrassenya
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,      // emailCrypt,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "Paire login/mot de passe incorrecte" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ message: "Paire login/mot de passe incorrecte" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, process.env.CLAU_SECRETA, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
