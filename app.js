const morgan = require('morgan');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { db } = require('./models');


app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.send('hello world');
});

