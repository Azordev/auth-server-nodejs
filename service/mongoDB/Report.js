const mongoose = require('mongoose')
const Schema = mongoose.Schema
function getPrice (num) {
  return (num / 100).toFixed(2)
}

function setPrice (num) {
  return num * 100
}

var Report = new Schema({
  invoice_id: {
    type: Number
  },
  company: {
    type: String,
    required: [true, 'proporciona el nombre de la compañía'],
    lowercase: true
  },
  client: {
    type: String,
    required: [true, 'proporciona un correo electrónico'],
    unique: true,
    lowercase: true
  },
  items: {
    type: String
  },
  status: {
    type: Boolean
  },
  total: {
    type: Number,
    required: [true, 'proporciona una contrasena'],
    get: getPrice,
    set: setPrice
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Report', Report)
