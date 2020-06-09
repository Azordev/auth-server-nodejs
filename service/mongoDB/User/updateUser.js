const userModel = require('./User')
const bcrypt = require('bcryptjs')
const logger = require('../../../util/logger')

module.exports = async (user = {}) => {
  try {
    const thisUser = { ...user }
    if (user.password) {
      thisUser.password = await bcrypt.hash(user.password, 8)
      logger.warn(`User ${user.email ? user.email : ''} changed password!`)
    }
    const updatedUser = await userModel.findOneAndUpdate({ email: user.email }, thisUser).select('-password').lean().exec({
      new: true,
      omitUndefined: true
    }, (err, user) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      return user
    })
    logger.info(`User ${updatedUser.email} updated!`)
    return {
      ok: true,
      data: updatedUser
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
