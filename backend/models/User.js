/** in backend/models/User.js */

// Importar.
const mongoose = require("mongoose");

// Validar email únic per evitar repetició.
const uniqueValidator = require('mongoose-unique-validator');

// Esquema de dades de User.
const userSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Aplicar el validador en tant que "plugin" a l'esquema.
userSchema.plugin(uniqueValidator);

// Exportar el mòdul.
module.exports = mongoose.model("User", userSchema);
