const jwt = require('jsonwebtoken')
const config = require('../../../../config/env/config')

const tokenVerification = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']

    if (!token) {
      res.set({
        'WWW-Authenticate': 'Bearer realm="/login", charset="UTF-8"'
      })
      res.status(401).json({
        ok: false,
        msg: 'No token provided',
        errors: [
          {
            msg: 'No token provided'
          }
        ]
      })
    }

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        res.set({
          'WWW-Authenticate': 'Bearer realm="/login", charset="UTF-8"'
        })
        return res.status(401).json({
          ok: false,
          msg: 'Invalid Token',
          errors: [
            {
              msg: 'Invalid Token'
            }
          ]
        })
      }
      res.locals.token = decoded
      next()
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      ok: false,
      msg: 'Servers code have a problem!',
      errors: [
        {
          ...error,
          msg: error.message
        }
      ]
    })
  }
}

module.exports = tokenVerification
