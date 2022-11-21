var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');

var app = express();

const session = require('express-session');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/', indexRouter);


app.use(session({
  secret: 'holamellamogonzaloytengo23años',
  resave: false,
  saveUninitialized: true
}));

app.get('/', function (req, res) {
  var existe = Boolean(req.session.text);
  res.render('index', {
    title: 'sesiones',
    existe: existe
  });
});

app.get('/escribir', function (req, res) {
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from("<form action='/guardar' method='post'><input type='text' name='texto'><button>Escribir</button></form>"));
});

app.post('/guardar', function(req, res){
  if(req.body.texto){
    req.session.text = req.body.texto;
  }
  console.log('var: ' + req.session.text);
  res.redirect('/');
});


app.get('/mostrar', function (req, res) {
  if (req.session.text) {
    res.send("la entrada es: " + req.session.text);
  } else {
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from("<p>no hay entrada, visita:<a href='/escribir'>escribir</a></p><br>"));
  }
});

app.get('/salir', function (req, res) {
  req.session.destroy();
  res.redirect('/');
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
