const { validationResult } = require('express-validator')

const services = require('../../../services')

const { findUser, logger, createUser } = services

const postSignUp = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({
      ok: false,
      msg: 'Request is well-formed, however, due to semantic errors it is unable to be processed. Validation errors',
      errors: errors.array()
    })
  }

  try {
    const { name, email, password, country } = req.body

    const isEmailExists = await findUser(email, true)

    if (isEmailExists.ok) {
      return res.status(409).json({
        ok: false,
        msg: 'email already exists',
        errors: [{
          msg: 'email already exists'
        }]
      })
    }

    const { ok, data } = await createUser({
      name,
      email,
      password,
      country
    })

    if (!ok) {
      return res.status(500).json(
        {
          ok: false,
          msg: 'there was a problem creating user in database.',
          errors: [{
            msg: 'there was a problem creating user in database.'
          }]
        }
      )
    }

    return res.status(201).json({
      ok: true,
      msg: 'user registered successfully',
      data: {
        id: data._id,
        name: data.name,
        email: data.email
      }
    })
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      ok: false,
      msg: 'there was a problem sign up the user.',
      errors: [{ error: error.message }]
    })
  }
}

module.exports = postSignUp
