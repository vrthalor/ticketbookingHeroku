const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js'); 
const router = require('./controllers/route')  

var app = express();
app.use(cors());
app.use('', router);         

// app.get('/', function (req, res) {
//   res.send('hello world from heroku server')
// })

app.use(bodyParser.json());
var PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server started at port: 3000"));
