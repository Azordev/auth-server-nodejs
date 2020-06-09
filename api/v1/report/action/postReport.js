const queries = require('../util/queries')
const fetchql = require('../service/fetchql')

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

    const newReport = await fetchql(
      queries.postReport[0],
      queries.postReport[1],
      {
        company,
        client,
        items,
        total,
        status
      }
    )
    if (newReport[queries.postReport[0]]) {
      return res.status(201).json({
        ok: true,
        msg: 'report created successfully',
        data: newReport
      })
    } else {
      throw new Error('El reporte no pudo crearse')
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: 'something went wrong, Please try again',
      errors: [error.message]
    })
  }
}

module.exports = postReport
