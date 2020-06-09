const services = require('../../../services')

const { updateReport, logger } = services

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

    const { ok, data } = await updateReport({
      company,
      client,
      items,
      total,
      status
    })

    logger.info(data)
    if (ok) {
      return res.status(200).json({
        ok: true,
        msg: 'El report se actualizo sin problemas!',
        data
      })
    } else {
      throw new Error('Hubo un problema con la Base de Datos!')
    }
  } catch (error) {
    logger.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'something went wrong with code, Please try again',
      errors: [error.message]
    })
  }
}

module.exports = putReport
