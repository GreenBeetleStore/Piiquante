/** in backend/controllers/sauces.js */

// Importacions.
const Salsa = require("../models/Salsa");
const fs = require("fs");

// Controladors "Salsa" amb noms sintàctics per la interacció amb l'API.
exports.createSalsa = (req, res, next) => {
  const coeur = JSON.parse(req.body.sauce);
  delete coeur._id;
  delete coeur._userId;
  const sauce = new Salsa({
    ...coeur,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  sauce
    .save()
    .then(() => {
      res.status(201).json({ message: "Sauce enregistrée !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.giveLikes = (req, res, next) => {
  if (req.body.like === 0) {
    Salsa.findOne({ _id: req.params.id })
      .then((sauce) => {
        if (sauce.usersLiked.find((user) => user === req.body.userId)) {
          Salsa.updateOne(
            { _id: req.params.id },
            {
              $inc: { likes: -1 },
              $pull: { usersLiked: req.body.userId },
            }
          )
            .then(() => {
              res
                .status(201)
                .json({ message: "Merci beaucoup pour votre Like !" });
            })
            .catch((error) => {
              res.status(400).json({ error });
            });
        }
        if (sauce.usersDisliked.find((user) => user === req.body.userId)) {
          Salsa.updateOne(
            { _id: req.params.id },
            {
              $inc: { dislikes: -1 },
              $pull: { usersDisliked: req.body.userId },
            }
          )
            .then(() => {
              res
                .status(201)
                .json({
                  message: "Nous sommes vraiment désolés de perdre un Like !",
                });
            })
            .catch((error) => {
              res.status(400).json({ error });
            });
        }
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  }
  if (req.body.like === 1) {
    Salsa.updateOne(
      { _id: req.params.id },
      {
        $inc: { likes: 1 },
        $push: { usersLiked: req.body.userId },
      }
    )
      .then(() => {
        res.status(201).json({ message: "Vous avez réduit un Like !" });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  }
  if (req.body.like === -1) {
    Salsa.updateOne(
      { _id: req.params.id },
      {
        $inc: { dislikes: 1 },
        $push: { usersDisliked: req.body.userId },
      }
    )
      .then(() => {
        res.status(201).json({ message: "Vous avez réduit un Dislike ! " });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  }
};

exports.getOneSalsa = (req, res, next) => {
  Salsa.findOne({
    _id: req.params.id,
  })
    .then((sauce) => {
      res.status(200).json(sauce);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifySalsa = (req, res, next) => {
  const coeur = req.file
    ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  delete coeur._userId;
  Salsa.findOne({ _id: req.params.id })
    .then((sauce) => {
      if (sauce.userId != req.auth.userId) {
        res.status(403).json({ message: "Non-autorisé" });
      } else {
        Salsa.updateOne(
          { _id: req.params.id },
          { ...coeur, _id: req.params.id }
        )
          .then(() =>
            res.status(200).json({ message: "Sauce modifiée avec succès !" })
          )
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteSalsa = (req, res, next) => {
  Salsa.findOne({ _id: req.params.id })
    .then((sauce) => {
      const filename = sauce.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Salsa.deleteOne({ _id: req.params.id })
          .then(() =>
            res.status(200).json({ message: "Sauce supprimée avec succès !" })
          )
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getAllSalsa = (req, res, next) => {
  Salsa.find()
    .then((sauces) => {
      res.status(200).json(sauces);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
