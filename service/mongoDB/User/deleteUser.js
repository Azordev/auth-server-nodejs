const userModel = require('./User')
const logger = require('../../../util/logger')

module.exports = async (email = '') => {
  try {
    const updatedUser = await userModel
      .findOneAndUpdate({ email }, { blocked: false })
      .select('-password')
      .lean()
      .exec(
        {
          new: true,
          omitUndefined: true
        },
        (err, user) => {
          if (err) {
            logger.warn(err)
            throw Error(err)
          }
          return user
        }
      )
    logger.info(`User ${updatedUser.email} Blocked!`)
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
