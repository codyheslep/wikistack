const morgan = require('morgan');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { db, Page, User } = require('./models');


const PORT = 1330;

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.send('hello world');
});

const init = async () => {
  try {
    await db.sync();

    app.listen(PORT, () => {
      console.log(`App listening in port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
init();
