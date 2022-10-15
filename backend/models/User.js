// in backend/models/User.js
const mongoose = require("mongoose");
// Validar email únic per evitar repetició.
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
