const mongoose = require('mongoose')
const logger = require('../util/logger')
const CRUD = require('../service/CRUD')

const db = async () => {
  logger.info('Initializing DBs')
  if (CRUD.driver === 'mongo') {
    logger.info('Initializing MongoDB')
    await mongoose.connect(
      CRUD.mongoDB.dbURL,
      CRUD.mongoDB.options
    )
      .then(_ => logger.info('Mongoose is connected!'))
      .catch(logger.error.bind(logger, 'connection error:'))
  }
}

module.exports = db
