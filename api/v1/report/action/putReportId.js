const queries = require('../util/queries')
const fetchql = require('../service/fetchql')

const putReport = async (req, res) => {
  try {
    const { reportId } = req.params
    const { company, client, items, total, status } = req.body

    if (!reportId) {
      return res.status(422).json({
        ok: false,
        msg: 'reportId is required',
        errors: [{
          msg: 'Provee un identificador para el reporte por favor!'
        }]
      })
    }

    const updated = await fetchql(queries.putReport[0], queries.putReport[1], {
      report_id: reportId,
      company,
      client,
      items,
      total,
      status
    })

    console.log(updated)
    if (updated[queries.putReport[0]]) {
      return res.status(200).json({
        ok: true,
        msg: 'El report se actualizo sin problemas!',
        data: {
          report_id: reportId,
          company,
          client,
          items,
          total,
          status
        }
      })
    } else {
      throw new Error('Hubo un problema con la Base de Datos!')
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'something went wrong with code, Please try again',
      errors: [error.message]
    })
  }
}

module.exports = putReport
