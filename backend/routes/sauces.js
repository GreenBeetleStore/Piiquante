/** in backend/routes/sauces.js */

// Importacions.
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require('../middleware/multer-config');
const saucesCtrl = require("../controllers/sauces");

// Definir les rutes de les salses.
router.post("/", auth, multer, saucesCtrl.createSalsa);
router.post("/:id/like", auth, multer, saucesCtrl.giveLikes);
router.put("/:id", auth, multer, saucesCtrl.modifySalsa);
router.delete("/:id", auth, multer, saucesCtrl.deleteSalsa);
router.get("/:id", auth, saucesCtrl.getOneSalsa);
router.get("/", auth, saucesCtrl.getAllSalsa);

// Exportar el mòdul router.
module.exports = router;
