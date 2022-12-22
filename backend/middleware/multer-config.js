/** in backend/middleware/multer-config.js */

// Importar.
const multer = require("multer");

// Protocol (Multipurpose Internet Mail Extensions) per l'intercanvi d'imatges.
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

// Enregistrar les imatges aplicant el nou nom de fitxer i un mètode "data-timing".
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(".")[0].split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

// Exportar el mòdul Multer.
module.exports = multer({ storage: storage }).single("image");
