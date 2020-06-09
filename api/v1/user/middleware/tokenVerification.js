const jwt = require('jsonwebtoken')
const services = require('../../../services')

const tokenVerification = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']

    if (!token) {
      res.status(401).json({
        ok: false,
        msg: 'No token provided',
        errors: [{
          msg: 'No token provided'
        }]
      })
    }

    jwt.verify(token, services.secret, (err, decoded) => {
      if (err) {
        res.status(401).json({
          ok: false,
          msg: 'Invalid Token',
          errors: [{
            msg: 'Invalid Token'
          }]
        })
      }

      next()
    })
  } catch (error) {
    services.logger.error(error)
    res.status(500).json({
      ok: false,
      msg: 'Invalid Token',
      errors: [{
        ...error,
        msg: error.message
      }]
    })
  }
}

module.exports = tokenVerification
