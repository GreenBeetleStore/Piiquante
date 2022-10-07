// in backend/routes/sauces.js
const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

const saucesCtrl = require("../controllers/sauces");

router.post("/", auth, saucesCtrl.createSalsa);
router.put("/:id", auth, saucesCtrl.modifySalsa);
router.delete("/:id", auth, saucesCtrl.deleteSalsa);
router.get("/:id", auth, saucesCtrl.getOneSalsa);
router.get("/", auth, saucesCtrl.getAllSalsa);

router.post("/:id/like", auth, saucesCtrl.createSalsa); // Create like. A crear el seu controller ?


module.exports = router;
