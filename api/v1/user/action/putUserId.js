const services = require('../../../services')

const { updateUser, findUser, logger } = services

const putUser = async (req, res) => {
  try {
    const { email } = req.params
    const {
      name,
      country,
      phone,
      password
    } = req.body

    if (email === undefined || email === '') {
      return res.status(422).json({
        ok: false,
        msg: 'email is required',
        errors: [{
          msg: 'Provee un email por favor!'
        }]
      })
    }

    const userExists = await findUser(email, true)

    if (!userExists.ok) {
      return res.status(404).json({
        ok: false,
        msg: 'No user found in the system',
        errors: [{
          msg: 'El usuario con ese ID no existe en la Base de Datos!'
        }]
      })
    }

    const temp = { email }
    if (name) temp.name = name
    if (country) temp.country = country
    if (phone) temp.phone = phone
    if (password) temp.password = password

    const updatedUser = await updateUser(temp)

    if (updatedUser.ok) {
      return res.status(200).json({
        ok: true,
        msg: 'El usuario se actualizo sin problemas!',
        data: updatedUser
      })
    } else {
      throw new Error('Hubo un problema con la Base de Datos!')
    }
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      ok: false,
      msg: 'something went wrong with code, Please try again',
      errors: [error.message]
    })
  }
}

module.exports = putUser
