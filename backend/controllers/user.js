/** in backend/controllers/user.js */

// Importar bcrypt per al Hash de contrassenya.
const bcrypt = require("bcrypt");

// Importar jsonwebtoken per la creació del TOKEN.
const jwt = require("jsonwebtoken");

// Importar el nostre model d'Usuari.
const User = require("../models/User");

// Importar dotenv per utilitzar variables d'entorn.
const dotenv = require("dotenv").config();

// Importar crypto per encriptar email.
const cryptojs = require("crypto-js");

// Validació d'email Regex.
emailRegex = (email) => {
  return /^[a-zA-Z0-9-çÇñÑ·.!#&'*+\/?^_`{|}~-]+[@]{1}[a-zA-Z0-9-çÇñÑ·!#&'*+\/?^_`{|}~-]+[.]{1}[a-zA-Z0-9-]{2,10}$/gm.test(
    email
  );
};

// Controladors "User" amb noms sintàctics per la interacció amb l'API.
exports.signup = (req, res, next) => {
  if (emailRegex(req.body.email)) {
    // Encriptar email.
    const emailCrypt = cryptojs
      .HmacSHA256(req.body.email, process.env.CLAU_LIAME)
      .toString();
    // Hash de contrassenya.
    bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        const user = new User({
          email: emailCrypt, // req.body.email, === // emailCrypt,
          password: hash,
        });
        user
          .save()
          .then(() =>
            res.status(201).json({ message: "Utilisateur enregistré !" })
          )
          .catch((error) => res.status(400).json({ error }));
      })
      .catch((error) => res.status(500).json({ error }));
  } else {
    res.status(401).json({ message: "Format d'email invalide !" });
  }
};

exports.login = (req, res, next) => {
  // Encriptar email amb el matix métode que signup.
  const emailCrypt = cryptojs
    .HmacSHA256(req.body.email, process.env.CLAU_LIAME)
    .toString();
  // Trobar email.
  User.findOne({ email: emailCrypt }) // req.body.email, === // emailCrypt,
    .then((user) => {
      // Si l'email no existeix.
      if (!user) {
        return res.status(401).json({ message: "Ce mail n'existe pas !" });
      }
      // Comparar contrasenya amb bcrypt per a la validació.
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          // Si la contrasenya no és correcta.
          if (!valid) {
            return res
              .status(401)
              .json({ message: "Ce n'est pas le bon mot de passe !" });
          }
          // Si tot és correcte aplicar el token "Bearer Token".
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, process.env.PUBLIC_BAIT, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
