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

//POST. Si col·loqueu la ruta POST a dalt de GET, interceptarà les sol·licituds POST, impedint que arribin al middleware GET.
  app.post('/api/sauces', (req, res, next) => {
    delete req.body._id;
    const salsa = new Salsa({
      ...req.body
    });
    salsa.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });

// GET. Array de sauces.
app.get("/api/sauces", (req, res, next) => {
  const sauces = [
    {
      _id: "oeihfzeoi",
      userId: "qsomihvqios",
      name: "Mon premier objet",
      description: "Les infos de mon premier objet",
      mainPepper: "String - Description de la sauce",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      heat: "Number , nombre entre 1 et 10 décrivant la sauce",
      likes: "Number , nombre d'utilisateurs qui aimen (=liken) la sauce",
      dislikes:
        "Number - nombre d'utilisateurs qui n'aimen pas (=disliken) la sauce",
      usersLiked:
        "[ 'String <userId>' ] — tableau des identifiants des utilisateurs qui ont aimé (= liked) la sauce",
      usersDisliked:
        "[ 'String <userId>' ] — tableau des identifiants des utilisateurs qui n'ont pas aimé (= disliked) la sauce",
    },
    {
      _id: "oeihfzeoi",
      userId: "qsomihvqios",
      name: "Mon premier objet",
      description: "Les infos de mon premier objet",
      mainPepper: "String - Description de la sauce",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      heat: "Number , nombre entre 1 et 10 décrivant la sauce",
      likes: "Number , nombre d'utilisateurs qui aimen (=liken) la sauce",
      dislikes:
        "Number - nombre d'utilisateurs qui n'aimen pas (=disliken) la sauce",
      usersLiked:
        "[ 'String <userId>' ] — tableau des identifiants des utilisateurs qui ont aimé (= liked) la sauce",
      usersDisliked:
        "[ 'String <userId>' ] — tableau des identifiants des utilisateurs qui n'ont pas aimé (= disliked) la sauce",
    },
  ];
  res.status(200).json(sauces);
});

app.use("/api/auth", userRoutes);

// Exportar l'aplicació.
module.exports = app;
