const mongoDB = require('./mongoDB')

module.exports = {
  ...mongoDB,
  driver: 'mongo'
}
