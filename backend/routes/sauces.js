// in backend/routes/sauces.js
const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();



const saucesCtrl = require("../controllers/sauces");

router.get("/", auth, saucesCtrl.getAllsauces);
router.post("/", auth, saucesCtrl.createThing);
router.get("/:id", auth, saucesCtrl.getOneThing);
router.put("/:id", auth, saucesCtrl.modifyThing);
router.delete("/:id", auth, saucesCtrl.deleteThing);

module.exports = router;
