/** in backend/middleware/auth.js */

// Importacions.
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// Mòdul d'autentificació per crear i verificar el Token del Bearer(Portador).
module.exports = (req, res, next) => {
  try {
    // Captura del token.
    const token = req.headers.authorization.split(" ")[1];
    // Verificar el token.
    const decodedToken = jwt.verify(token, process.env.PUBLIC_BAIT);
    // Recuperar l'userID.
    const userId = decodedToken.userId;
    req.auth = {
      userId: userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error: error });
  }
};
