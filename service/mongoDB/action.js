var userModel = require('./User')
const bcrypt = require('bcryptjs')
const logger = require('../../util/logger')

module.exports = {
  create: async ({ email = '', name = '', password = '', country = '' }) => {
    try {
      if (!email || !password) throw Error('You must provide email and password!')
      const hashedPassword = await bcrypt.hash(password, 8)
      const newUser = await userModel.create(
        {
          email,
          name,
          password: hashedPassword,
          country
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
  },
  findOne: async (email = '') => {
    try {
      if (!email) throw Error('You must provide an email!')
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
  },
  update: async (user = {}) => {
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
}
