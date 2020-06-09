const user = require('./User')
const report = require('./Report')

module.exports = {
  report,
  user,
  dbURL: process.env.MONGODB_URI || 'mongodb://localhost/auth-server',
  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
}
