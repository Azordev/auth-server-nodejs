const services = require('../../../services')

const { deleteUser, logger } = services

const deleteUserId = async (req, res) => {
  const { email } = req.params
  try {
    logger.info(`user ${email} requested for deletion!`)
    const user = await deleteUser(email)
    if (user) {
      return res.status(204).json({
        ok: true,
        msg: `user ${email} deleted successfully`,
        data: user
      })
    }

    return res.status(404).json({
      ok: false,
      msg: 'No users found in the system',
      errors: [{
        msg: 'No users found in the system'
      }]
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

module.exports = deleteUserId
