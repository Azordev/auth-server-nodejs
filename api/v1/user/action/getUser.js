const services = require('../../../services')

const { findUser, logger } = services

const getUserId = async (req, res) => {
  try {
    const { email } = req.params
    const user = await findUser(email)

    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: 'No user found in the system',
        errors: [{
          msg: 'No user found in the system'
        }]
      })
    }

    return res.status(200).json({
      ok: true,
      msg: `user ${email} fetched successfully`,
      data: user
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

module.exports = getUserId
