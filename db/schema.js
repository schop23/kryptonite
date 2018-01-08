const mongoose = require('./connection')

const ComicBookSchema = new mongoose.Schema({
  title: String,
  publisher: String,
  issue: Number,
  url: String,
  review: String
})

const ComicBook = mongoose.model('ComicBook', ComicBookSchema)

module.exports = ComicBook
