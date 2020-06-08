const mongoose = require('mongoose')
const Schema = mongoose.Schema

var User = new Schema(
  {
    name: {
      type: String,
      required: [true, 'proporciona un nombre']
    },
    avatar: {
      type: String,
      default: 'https://img.icons8.com/doodle/96/000000/name.png'
    },
    email: {
      type: String,
      required: [true, 'proporciona un correo electrónico'],
      unique: true,
      lowercase: true
    },
    phone: String,
    password: {
      type: String,
      required: [true, 'proporciona una contraseña']
    },
    role: {
      type: String,
      enum: ['ADMIN', 'BOSS', 'EMPLOYEE', 'CLIENT'],
      default: 'CLIENT'
    },
    coins: {
      type: Number,
      min: [0, 'No tienes guimyCoins aun!']
    },
    country: {
      type: String,
      default: 'PE'
    },
    address: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', User)
