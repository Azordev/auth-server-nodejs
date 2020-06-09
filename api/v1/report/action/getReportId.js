const queries = require('../util/queries')
const fetchql = require('../service/fetchql')

const getReportId = async (req, res) => {
  try {
    const { reportId } = req.params
    const { reports } = await fetchql(
      queries.getReportId[0],
      queries.getReportId[1],
      { report_id: reportId }
    )
    console.log(reports)
    if (reports.length < 1) {
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
      data: reports
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: 'something went wrong, Please try again',
      errors: [error]
    })
  }
}

module.exports = getReportId
