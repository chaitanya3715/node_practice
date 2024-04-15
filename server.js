const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')

const menu = require('./models/menuItem')

app.use(bodyParser.json());

// GET METHOD
app.get('/', (req, res) => {
  res.send('WELCOME CHAITANYA !!! HOW CAN I HELP YOU')
})

// import router files:
const personroutes =  require('./routes/personroutes');
const menuroutes = require('./routes/menuroutes');

// use :
app.use('/person',personroutes);
app.use( '/menu' , menuroutes );



app.listen(3000, () => {
  console.log('Server is running on PORT:3000')
})





