const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const MongoClient    = require('mongodb').MongoClient;
const mustacheExpress = require('mustache-express');
const mainController = require('./controllers/main');
const postController = require('./controllers/post');




const app = express();
const PORT = process.env.PORT || 3000;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/views', mainController)
app.use('/posts', postController)

app.get('/', (req, res) => {
	console.log('POSTS');
    res.render('posts/index');
});





app.listen(PORT, () => console.log('Server listening on port', PORT));