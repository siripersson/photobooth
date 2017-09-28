// Imports
const express = require('express')
const path = require('path')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  console.log('fetching first page')
  res.render('index')
})

app.get('/om-mig', (req, res) => {
  console.log('fetching about page')
  res.send('Jag heter Siri')
})


app.get('/kontakt', (req, res) => {
  console.log('fetching contact page')
  res.send('Du når mig på slack')
})

app.listen(3000, (req, res) => {
  console.log('Open localhost:3000!')
})
