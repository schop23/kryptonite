const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/kryptonite', {
  useMongoClient: true
})

mongoose.Promise = Promise

module.exports = mongoose
