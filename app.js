// Imports
const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000 // create port variable

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  console.log('Fetching first page')
  res.render('index')
})

app.get('/about', (req, res) => {
  console.log('Fetching about page')
  //res.send('Jag heter Siri')
  res.render('about')
})


app.get('/contact', (req, res) => {
  console.log('Fetching contact page')
  //res.send('Du når mig på slack')
  res.render('contact')
})

app.listen(port, (req, res) => {
  console.log('Open localhost:3000!')
})
