/** in backend/routes/user.js */

// Importacions.
const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const passwordVal = require("../middleware/password");

// Definir les rutes d'usuari.
router.post("/signup", passwordVal, userCtrl.signup);
router.post("/login", userCtrl.login);

// Exportar el mòdul router.
module.exports = router;
