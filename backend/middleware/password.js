/** in backend/middleware/password.js */

// Importar password-validator.
const passwordValidator = require("password-validator");

/** Ce schéma a été créé en suivant des règles minimales pour renforcer le mot de passe, simplement pour faciliter la présentation de ce projet de formation.
Pour un projet qui est déjà en déploiement, il est important de créer des règles plus exigeantes.
*/

// Crear un esquema de reforç de la contrasenya.
const passwordSchema = new passwordValidator();

// Format a seguir per crear una contrasenya.
passwordSchema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(2) // Must have at least 2 digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123", "Qwerty123", "Azerty123"]); // Blacklist these values

// Verificar la força de la contrasenya.
module.exports = (req, res, next) => {
  if (passwordSchema.validate(req.body.password)) {
    next();
  } else {
    return res.status(400).json({
      error:
        "Mot de passe faible, non accepté ! : " +
        passwordSchema.validate("req.body.password"),
    });
  }
};
