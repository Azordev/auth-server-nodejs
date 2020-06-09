const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Report = new Schema({
  type: {
    type: String,
    required: [true, 'Give the type of report'],
    enum: ['MONEY', 'DB', 'DELIVERY', 'PQR', 'OTHER'],
    default: 'DB',
    uppercase: true
  },
  origin: {
    type: String,
    required: [true, 'Give where the report was originated'],
    enum: ['DELIVERY', 'GO', 'GUIMY', 'WEB', 'ADMIN', 'OTHER'],
    default: 'GUIMY',
    uppercase: true
  },
  user: {
    type: String,
    required: [true, 'Give email of user originating event']
  },
  event: {
    type: String,
    required: [true, 'Give a description of the events']
  },
  comment: String,
  status: {
    type: String,
    enum: ['INIT', 'PROCESSING', 'ONHOLD', 'REJECTED', 'PROCESSED', 'OTHER'],
    default: 'INIT',
    uppercase: true
  },
  hidden: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Report', Report)
