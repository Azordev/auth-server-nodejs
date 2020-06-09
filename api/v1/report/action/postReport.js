const services = require('../../../services')

const { createReport, logger } = services

const postReport = async (req, res) => {
  try {
    const { company, client, items, total, status } = req.body

    if (!client) {
      return res.status(422).json({
        ok: false,
        msg: 'client is required',
        errors: [
          {
            msg: 'Agrega el cliente'
          }
        ]
      })
    }

    const { ok, data } = await createReport({
      company,
      client,
      items,
      total,
      status
    })
    if (ok) {
      return res.status(201).json({
        ok: true,
        msg: 'report created successfully',
        data
      })
    } else {
      throw new Error('El reporte no pudo crearse')
    }
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      ok: false,
      msg: 'something went wrong, Please try again',
      errors: [error.message]
    })
  }
}

module.exports = postReport
