const services = require('../../../services')

const { findReports, logger } = services

const getReportAll = async (_req, res) => {
  try {
    const { ok, data } = await findReports({})
    if (ok && data.length > 0) {
      return res.status(200).json({
        ok: true,
        msg: 'reports fetched successfully',
        data
      })
    }
    return res.status(404).json({
      ok: false,
      msg: 'No reports found in the system',
      errors: [{ msg: 'No reports found in the system', data }]
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

module.exports = getReportAll
