const express = require('express')
const ComicBooks = require('../db/schema')

const router = express.Router()

// welcome page
router.get('/', (req, res) => {
  ComicBooks.find({})
    .then((comics) => {
      res.json(comics)
    })
})

// selecting comic to look at
router.get('/:comicId', (req, res) => {
  ComicBooks.findOne({_id: req.params.comicId})
    .then((comic) => {
      res.render('comic', {
        comicBook: comic
      })
    })
})

// Edit Entry
router.put('/:comicId', (req, res) => {
  ComicBooks.findOneAndUpdate({_id: req.params.comicId},
    req.body.editComic, {
      new: true})
      .then((comic) => {
        res.redirect(`/${comic._id}`)
      })
})

// Post New Comic
router.post('/', (req, res) => {
  console.log(req.body)
  ComicBooks
  .create(req.body)
  .then(comicBook => {
    res.json(comicBook)
  })
  .catch((err) => {
    console.log(err)
  })
})

// Delete Entry
router.delete('/:comicId', (req, res) => {
  ComicBooks.findOneAndRemove({_id: req.params.comicId})
    .then(() => {
      res.redirect('/')
    })
})

module.exports = router
