const services = require('../../../services')

const { findReports, logger } = services

const getReportId = async (req, res) => {
  try {
    const { reportId } = req.params
    const { ok, data } = await findReports(
      { _id: reportId }
    )
    logger.info(data)
    if (ok && data.length < 1) {
      return res.status(404).json({
        ok: false,
        msg: 'No report found in the system',
        errors: [{
          msg: 'No report found in the system'
        }]
      })
    }
    return res.status(200).json({
      ok: true,
      msg: `report ${reportId} fetched successfully`,
      data
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

module.exports = getReportId
