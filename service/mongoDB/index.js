const action = require('./action')

module.exports = {
  ...action,
  dbURL: process.env.MONGODB_URI || 'mongodb://localhost/auth-server',
  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
}
