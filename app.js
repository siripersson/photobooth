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

app.listen(port, (req, res) => {
  console.log('Open localhost:3000!')
})
