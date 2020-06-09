const user = require('./User')

module.exports = {
  user,
  dbURL: process.env.MONGODB_URI || 'mongodb://localhost/auth-server',
  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
}
