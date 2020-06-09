const express = require('express')
const reportRouter = express.Router()
const {
  root,
  getReportAll,
  postReport, // CREATE
  getReportId, // READ
  putReportId, // UPDATE
  deleteReportId // DELETE
} = require('./action')
const {
  tokenVerification
} = require('../middleware')

reportRouter.get('/', root)
reportRouter.post('/', tokenVerification, postReport)
reportRouter.get('/all', tokenVerification, getReportAll)
reportRouter.get('/:reportId', tokenVerification, getReportId)
reportRouter.put('/:reportId', tokenVerification, putReportId)
reportRouter.delete('/:reportId', tokenVerification, deleteReportId)

module.exports = reportRouter
