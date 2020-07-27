const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
const router = require('./controllers/route')

var app = express();
app.use(cors());
app.use('', router);

app.use(bodyParser.json());

app.listen(3000, () => console.log("server started at port: 3000"));
