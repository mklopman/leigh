const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mustacheExpress = require('mustache-express');
const mainController = require('./controllers/main');



const app = express();
const PORT = process.env.PORT || 3000;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use('/views', mainController)

app.get('/', (req, res) => {
    res.render('index');
});



app.listen(PORT, () => console.log('Server listening on port', PORT));