const userModel = require('./User')
const logger = require('../../../util/logger')

module.exports = async (email = '', exists = false) => {
  try {
    if (!email) throw Error('You must provide an email!')
    if (exists) {
      return await userModel.exists({ email })
        .then(res => {
          return {
            ok: res,
            data: res
          }
        })
        .catch(error => {
          logger.warn(error)
          throw Error(error)
        })
    }
    const user = await userModel.findOne({ email }).select('-password').lean().exec((err, user) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      return user
    })
    logger.info(`User ${user.email} found!`)
    return {
      ok: true,
      data: user
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
