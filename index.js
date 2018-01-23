const express = require('express')
const hbs = require('express-handlebars')
const parser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const kryptonite = require('./controllers/kryptonite')
const cors = require('cors')

app.set('port', process.env.PORT || 3002)
app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
  extname: '.hbs',
  partialsDir: 'views/',
  layoutsDir: 'views/',
  defaultLayout: 'layout'
}))

app.use('/assets', express.static('public'))
app.use(express.static(__dirname + '/public'))
// app.use(parser.urlencoded({ extended: true }))
app.use(parser.json({ extended: true }))
app.use(methodOverride('_method'))
app.use(cors())

app.use('/', kryptonite)

/* app.get('/', (req, res) => {
  res.send('I am Batman.')
}) */

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
