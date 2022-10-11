// in backend/controllers/sauces.js
const Salsa = require("../models/Salsa");
const fs = require("fs");

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
  // Like.
  if (req.body.like === 1) {
    Salsa.updateOne(
      { _id: req.params.id },
      {
        $inc: { likes: req.body.like++ },
        $push: { usersLiked: req.body.userId },
      }
    )
      .then((sauce) =>
        res.status(200).json({ message: "Merci beaucoup pour votre Like !" })
      )
      .catch((error) => res.status(400).json({ error }));
    // Dislike.
  } else if (req.body.like === -1) {
    Salsa.updateOne(
      { _id: req.params.id },
      {
        $inc: { dislikes: req.body.like++ * -1 },
        $push: { userDisliked: req.body.userId },
      }
    )
      .then((sauce) =>
        res
          .status(200)
          .json({ message: "Nous sommes vraiment désolés de perdre un Like !" })
      )
      .catch((error) => res.status(400).json({ error }));
    // Quitar Likes/Dislikes.
  } else {
    Salsa.findOne({ _id: req.params.id })
      .then((sauce) => {
        if (sauce.usersLiked.includes(req.body.userId)) {
          Salsa.updateOne(
            { _id: req.params.id },
            { $pull: { usersLiked: req.body.userId }, $inc: { likes: -1 } }
          )
            .then((sauce) => {
              res.status(200).json({ message: "Vous avez réduit un Like !" });
            })
            .catch((error) => res.status(400).json({ error }));
        } else if (sauce.usersDisliked.includes(req.body.userId)) {
          Salsa.updateOne(
            { _id: req.params.id },
            {
              $inc: { dislikes: -1 },
              $pull: { usersDisliked: req.body.userId },
            }
          )
            .then((sauce) => {
              res
                .status(200)
                .json({ message: "Vous avez réduit un Dislike ! " });
            })
            .catch((error) => res.status(400).json({ error }));
        }
      })
      .catch((error) => res.status(400).json({ error }));
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
          .then(() => res.status(200).json({ message: "Sauce modifiée avec succès !" }))
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
 
  const sauce = new Salsa({
    _id: req.params.id,
    userId: req.body.sauce.userId,
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    description: req.body.description,
    mainPepper: req.body.mainPepper,
    imageUrl: req.body.imageUrl,
    heat: req.body.heat,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
    userLiked: req.body.userLiked,
    userDisliked: req.body.userDisliked,
  });
  Salsa.updateOne({ _id: req.params.id }, sauce)
    .then(() => {
      res.status(201).json({
        message: "Salsa mis à jour avec succès !",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.deleteSalsa = (req, res, next) => {
  Salsa.findOne({ _id: req.params.id })
    .then((sauce) => {
      if (sauce.userId != req.auth.userId) {
        res.status(403).json({ message: "Non autorisé" });
      } else {
        const filename = sauce.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Salsa.deleteOne({ _id: req.params.id });
        })
          .then(() => {
            res.status(200).json({ message: "Sauce supprimée !" });
          })
          .catch((error) => {
            res.status(400).json({ error: error });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
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
