// in backend/routes/sauces.js
const express = require("express");

const router = express.Router();
const auth = require("../middleware/auth");
const multer = require('../middleware/multer-config');
const saucesCtrl = require("../controllers/sauces");

router.post("/", auth, multer, saucesCtrl.createSalsa);
router.post("/:id/like", auth, multer, saucesCtrl.giveLikes);
router.put("/:id", auth, multer, saucesCtrl.modifySalsa);
router.delete("/:id", auth, saucesCtrl.deleteSalsa);
router.get("/:id", auth, saucesCtrl.getOneSalsa);
router.get("/", auth, saucesCtrl.getAllSalsa);

module.exports = router;
