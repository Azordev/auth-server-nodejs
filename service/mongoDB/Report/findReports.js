const reportModel = require('./Report')
const logger = require('../../../util/logger')

module.exports = async (query = {}) => {
  try {
    const reports = await reportModel
      .find(query)
      .lean()
      .exec((err, reports) => {
        if (err) {
          logger.warn(err)
          throw Error(err)
        }
        return reports
      })
    logger.info('Reports Retrieved!')
    return {
      ok: true,
      data: reports
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
