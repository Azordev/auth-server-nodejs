const userModel = require('./User')
const bcrypt = require('bcryptjs')
const logger = require('../../../util/logger')

module.exports = async ({ email = '', name = '', password = '', country = '' }) => {
  try {
    if (!email || !password) throw Error('You must provide email and password!')
    const hashedPassword = await bcrypt.hash(password, 8)
    const newUser = await userModel.create(
      {
        email,
        name,
        country,
        password: hashedPassword
      }).select('-password').lean().exec(
      (err, user) => {
        if (err) {
          logger.warn(err)
          throw Error(err)
        }
        return user
      }
    )
    logger.info(`User ${newUser.email} created!`)
    return {
      ok: true,
      data: newUser
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
