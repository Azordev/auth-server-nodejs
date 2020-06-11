const reportModel = require('./Report')
const logger = require('../../../util/logger')

module.exports = async reportID => {
  try {
    const result = await reportModel
      .findByIdAndUpdate({
        _id: reportID
      }, {
        hidden: true
      },
      (err, result) => {
        if (err) {
          logger.warn(err)
          throw Error(err)
        }
        return result
      })
    logger.info(`Report ${reportID} Blocked!`)
    return {
      ok: true,
      data: result
    }
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}
