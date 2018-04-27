const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');


app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParse.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.send('hello world');
});
