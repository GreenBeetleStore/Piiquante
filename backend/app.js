// in backend/app.js
// Importar Express, mongoose, routeur.
const express = require("express");
const mongoose = require("mongoose");

const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");

// Connectar mongoose.
mongoose
  .connect(
    "mongodb+srv://escarabatverd:Atlas10@clusterocr.76dpav8.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// Crear la nostra aplicació.
const app = express();

// Middleware general, per a tota classe de rutes.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", userRoutes);

// Exportar l'aplicació.
module.exports = app;
