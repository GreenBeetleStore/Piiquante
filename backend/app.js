// in backend/app.js
// Importar Express, mongoose, routeur.
const express = require("express");
const mongoose = require("mongoose");

const Salsa = require('./models/Salsa');

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

// Intercepta totes les sol·licituds(requêtes) que contenen json i les fica a disposició el cor de la requête soble l'objecte req.body.
app.use(express.json());

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

// POST. Per afegir una sauce. 
// Al col·locar la ruta POST a dalt de GET, s'intercepten les sol·licituds POST, impedint que arribin al middleware GET.
  app.post('/api/sauces', (req, res, next) => {
    delete req.body._id;
    const sauce = new Salsa({
      ...req.body
    });
    sauce.save()
      .then(() => res.status(201).json({ message: 'Sauce enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });

  // PUT. Modificar une sauce existent.
  app.put('/api/sauces/:id', (req, res, next) => {
    Salsa.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Sauce modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });

  // DEL. Suprimir una sauce.
  app.delete('/api/stuff/:id', (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });

  // GET. Per trobar una sauce específica.
  app.get('/api/sauces/:id', (req, res, next) => {
    Salsa.findOne({ _id: req.params.id })
      .then(sauce => res.status(200).json(sauce))
      .catch(error => res.status(404).json({ error }));
  });

// GET. Obtenir l'Array de totes les sauces.
app.get("/api/sauces", (req, res, next) => {
  Salsa.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({ error }));
});

app.use("/api/auth", userRoutes);

// Exportar l'aplicació.
module.exports = app;
