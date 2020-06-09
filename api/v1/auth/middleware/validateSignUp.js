const { body } = require('express-validator')

const validateSignUp = () => {
  return [
    body('name')
      .exists()
      .withMessage('Proporciona un nombre para tu cuenta')
      .isLength({ min: 3 })
      .withMessage('Tu nombre debe ser mayor a 3 caracteres'),
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

module.exports = validateSignUp
