/** in backend/models/Salsa.js */

// Importar.
const mongoose = require('mongoose');

// Esquema de dades de Salsa.
const salsaSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true, min:1, max:10 },
  likes: { type: Number, required: false, default: 0 },
  dislikes: { type: Number, required: false, default: 0 },
  usersLiked: { type: [String], required: false, default: [] },
  usersDisliked: { type: [String], required: false, default: [] },

});

// Exportar el mòdul.
module.exports = mongoose.model('Salsa', salsaSchema); 