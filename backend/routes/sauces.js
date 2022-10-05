// in backend/routes/sauces.js
const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

const saucesCtrl = require("../controllers/sauces");

router.get("/", auth, saucesCtrl.getAllsauces);
router.post("/", auth, saucesCtrl.createSalsa);
router.get("/:id", auth, saucesCtrl.getOneSalsa);
router.put("/:id", auth, saucesCtrl.modifySalsa);
router.delete("/:id", auth, saucesCtrl.deleteSalsa);
router.post("/:id/like", auth, saucesCtrl.createSalsa);

module.exports = router;
