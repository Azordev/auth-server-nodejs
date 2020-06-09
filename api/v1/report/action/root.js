const root = async (req, res) => {
  const info = [ // TODO: make a function that takes swajjer json and generate this
    {
      path: '/api/v1/report',
      url: 'https://azordev-auth.herokuapp.com/api/v1/report',
      description: 'Get info about Endpoint. Return info',
      methods: {
        get: {
          summary: 'Info about /report Endpoint',
          description: 'Return an explanation of endpoint'
        },
        post: {
          description: 'TODO Add the role LATER',
          summary: 'CREATE an User by request'
        }
      }
    },
    {
      path: '/api/v1/report/{reportId}',
      url: 'https://azordev-auth.herokuapp.com/api/v1/report/{reportId}',
      description: 'operations in User from specific id. Need to have a valid token.',
      methods: {
        get: {
          operationId: 'getUserId',
          summary: 'READ info about certain report',
          description: 'provide an id (and a valid token) to get the info of the report the id belongs'
        },
        put: {
          summary: 'UPDATE report',
          description: 'Modify current info of report'
        },
        delete: {
          summary: 'DELETE the report',
          description: 'Give an ID and I will delete the report that belongs to'
        }
      }
    },
    {
      path: '/api/v1/reports',
      url: 'https://azordev-auth.herokuapp.com/api/v1/reports',
      description: 'Operations made with all the reports',
      methods: {
        get: {
          summary: 'Get a list of all reports',
          description: 'Returns an array of all reports registered'
        }
      }
    }
  ]
  return res.status(200).send({
    ok: true,
    msg: 'The /report route is about CRUD operations on User database',
    data: info
  })
}

module.exports = root
