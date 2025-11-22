var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');
var minifyHTML = require('express-minify-html-2');
var minify = require('express-minify');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
const favicon = require("serve-favicon");

var app = express();
app.use(compression());
app.use(favicon(path.join(__dirname, 'public', 'images', 'logo.png')));

app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1d',
    etag: true
}));

app.use(minify({}))

app.use(minifyHTML({
    override:      true,
    exception_url: false,
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true
    }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err.stack ? err.stack : err;

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
