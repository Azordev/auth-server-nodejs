const queries = require('../util/queries')
const fetchql = require('../service/fetchql')

const getReportAll = async (_req, res) => {
  try {
    const { reports } = await fetchql(
      queries.getReportAll[0],
      queries.getReportAll[1]
    )
    if (reports.length > 0) {
      return res.status(200).json({
        ok: true,
        msg: 'reports fetched successfully',
        data: reports
      })
    }
    return res.status(404).json({
      ok: false,
      msg: 'No reports found in the system',
      errors: [{ msg: 'No reports found in the system', reports }]
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

module.exports = getReportAll
