const ComicBooks = require('./schema')
const seedData = require('./seeds.json')

ComicBooks.remove({})
  .then(() => {
    return ComicBooks.collection.insert(seedData)
  })
  .then (() => {
    process.exit()
  })
