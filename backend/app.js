// in backend/app.js
// Importar Express.
const express = require('express');

// Crear la nostra aplicació.
const app = express();

app.use((req, res) => {
      res.json({ message: 'Votre requête a bien été reçue !'});
})

// Exportar l'aplicació.
module.exports = app;