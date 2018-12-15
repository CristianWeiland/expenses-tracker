const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.HOST || 'localhost',
  user: process.env.USER || 'root',
  password: process.env.PASSWORD || '123mudar',
  database: process.env.DATABASE || 'expenses',
});

connection.connect();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Create database schemas
require('./db_schemas')(connection);

require('./expenses')(app, connection);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
