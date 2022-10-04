// in backend/app.js
// Importar Express.
const express = require("express");

// Importar mongoose.
const mongoose = require('mongoose');

// Connectar mongoose.
mongoose.connect('mongodb+srv://escarabatverd:Atlas10@clusterocr.76dpav8.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Crear la nostra aplicació.
const app = express();

app.use((req, res, next) => {
  console.log("Requête reçue !");
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: "Votre requête a bien été reçue !" });
  next();
});

app.use((req, res, next) => {
  console.log("Réponse envoyée avec succès !");
});

// Exportar l'aplicació.
module.exports = app;
