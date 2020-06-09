const queries = require('../util/queries')
const fetchql = require('../service/fetchql')

const deleteReportId = async (req, res) => {
  const { reportId } = req.params
  try {
    const report = await fetchql(
      queries.deleteReport[0],
      queries.deleteReport[1],
      { report_id: reportId }
    )
    if (report[queries.deleteReport[0]]) {
      console.log(report)
      return res.status(204).json({
        ok: true,
        msg: `report with id ${reportId} deleted successfully`,
        data: [report]
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
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'something went wrong, Please try again',
      errors: [error]
    })
  }
}

module.exports = deleteReportId
