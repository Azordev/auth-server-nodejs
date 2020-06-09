const locals = (req, res, next) => {
  res.locals.custom = true
  res.locals.myObject = { hello: 1 }
  next()
}

module.exports = locals
