// in backend/routes/user.js
const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const passwordVal = require("../middleware/password");

router.post("/signup", passwordVal, userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
