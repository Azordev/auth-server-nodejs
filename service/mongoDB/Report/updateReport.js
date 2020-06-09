const reportModel = require('./Report')
const logger = require('../../../util/logger')

module.exports = async (reportID, status, comment, hidden) => {
  try {
    const temp = { }
    if (status) temp.status = status
    if (comment) temp.comment = comment
    if (hidden) temp.hidden = hidden

    const updatedReport = await reportModel
      .findOneAndUpdate({ _id: reportID }, { blocked: false }, {
        new: true,
        omitUndefined: true
      })
      .lean()
      .exec(
        (err, report) => {
          if (err) {
            logger.warn(err)
            throw Error(err)
          }
          return report
        }
      )
    logger.info(`Report ${reportID} Updated!`)
    return {
      ok: true,
      data: updatedReport
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
