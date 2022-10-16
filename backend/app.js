// in backend/app.js
// Importar: Express, mongoose, path, rutas, morgan, dotenv.
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv").config();

// Importar les rutes.
const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");

// Connectar mongoose.
mongoose
  .connect(
    `mongodb+srv://${ process.env.DB_USERNAME }:${ process.env.DB_PASSWORD }@${ process.env.DB_CLUSTER }.mongodb.net/${ process.env.DB_NAME }?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// Crear la nostra aplicació.   
const app = express();

// Middleware general, per a tota classe de rutes + configurar CORS.
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

// Registre/Visor de les sol·licituds y les respostes amb morgan.
app.use(morgan("dev"));

// Rutes.
app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

// Exportar l'aplicació.
module.exports = app;
