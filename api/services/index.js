const CRUD = require('../../service/CRUD')
const secret = require('../../service/config')
const logger = require('../../util/logger')

module.exports = {
  logger,
  secret,
  createUser: CRUD.mongoDB.user.createUser,
  deleteUser: CRUD.mongoDB.user.deleteUser,
  findUser: CRUD.mongoDB.user.findUser,
  updateUser: CRUD.mongoDB.user.updateUser
}
