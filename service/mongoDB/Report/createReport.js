const reportModel = require('./Report')
const logger = require('../../../util/logger')

module.exports = async (type, origin, user, event, status) => {
  try {
    const newReport = await reportModel.create(
      {
        type,
        origin,
        user,
        event,
        status
      }).lean().exec((err, report) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      return report
    })
    logger.info(`Report ${newReport._id} created!`)
    return {
      ok: true,
      data: newReport
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
