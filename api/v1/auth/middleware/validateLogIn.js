const { body } = require('express-validator/check')

const validateLogIn = () => {
  return [
    body('email').exists()
      .withMessage('Proporciona una dirección de correo')
      .isEmail()
      .withMessage('Email no valido'),
    body('password')
      .exists()
      .withMessage('Proporciona una Contrasena')
      .isLength({ min: 6, max: 24 })
      .withMessage('Contrasena debe ser mayor a 6 caracteres')
  ]
}

module.exports = validateLogIn
