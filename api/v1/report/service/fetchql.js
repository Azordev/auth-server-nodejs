const FetchQL = require('fetchql')
global.fetch = require('node-fetch')

const url = 'https://etl-backend.herokuapp.com/v1/graphql'

const headers = {
  'content-type': 'application/json'
}

var Query = new FetchQL({
  url,
  headers,
  interceptors: [{
    request (url, config) {
      return [url, config]
    }
  }],
  onStart (requestQueueLength) {
    startTrack = true
    queueLength = requestQueueLength
  },
  onEnd (requestQueueLength) {
    endTrack = true
    queueLength = requestQueueLength
  }
})

module.exports = (operationName, query, variables) => {
  return Query.query({ operationName, query, variables })
    .then(response => response.data)
    .catch(error => {
      console.error(error)
      return { error: error[0].message }
    })
}
