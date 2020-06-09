const services = require('../../../services')

const { logger } = services

const getUserAll = async (_req, res) => {
  try {
    const users = await services.find({})

    if (users.length > 0) {
      logger.info('requested all users')
      return res.status(200).json({
        ok: true,
        msg: 'users fetched successfully',
        data: users
      })
    }
    return res.status(404).json({
      ok: false,
      msg: 'No users found in the system',
      errors: [{ msg: 'No users found in the system', users }]
    })
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      ok: false,
      msg: 'something went wrong, Please try again',
      errors: [error]
    })
  }
}

module.exports = getUserAll
