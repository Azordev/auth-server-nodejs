const services = require('../../../services')

const { deleteReport, logger } = services

const deleteReportId = async (req, res) => {
  try {
    const { reportId } = req.params
    const { ok, data } = await deleteReport(reportId)
    if (ok) {
      logger.info(data)
      return res.status(204).json({
        ok: true,
        msg: `report with id ${reportId} deleted successfully`,
        data
      })
    }

    return res.status(404).json({
      ok: false,
      msg: 'No reports found in the system',
      errors: [{
        msg: 'Reporte con ese ID no encontrado en la DB!'
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

module.exports = deleteReportId
