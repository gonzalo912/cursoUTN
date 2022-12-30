var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
require('dotenv').config();


var index = require('./routes/index');
var users = require('./routes/users');
var contactoRouter = require('./routes/contacto');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');
var novedadesRouter = require('./routes/novedades');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'holasoygonzalo',
  resave: false,
  saveUninitialized: true
}));

secured = async(req, res, next) => {
  try{
    if(req.session.id_usuario){
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch(error){
    console.log(error);
  }
}

app.use('/', index);
app.use('/users', users);
app.use('/contacto', contactoRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, adminRouter);
app.use('/novedades', novedadesRouter);

app.get('/prode', function(req, res, next){
  res.render('<h4>PROXIMAMENTE</h4>');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
