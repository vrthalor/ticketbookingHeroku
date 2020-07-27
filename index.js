const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

// const { mongoose } = require('./db.js');   commited
// const router = require('./controllers/route')  commited

var app = express();
app.use(cors());
// app.use('', router);         commited

app.get('/', function (req, res) {
  res.send('hello world from heroku server')
})

app.use(bodyParser.json());

app.listen(3000, () => console.log("server started at port: 3000"));
