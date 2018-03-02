'use strict';

require('dotenv').config();

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    compress = require('compression');

var app = express();
var router = express.Router();

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride());
app.use(compress());

var port = process.env.PORT || 3000;


app.use('/api/v1', require('./api/v1'));

app.get('/', function (req, res){
  var rootPath = '';
  if (process.env.NODE_ENV === 'production') {
    rootPath = path.join(__dirname, '..', 'public')
  } else {
    rootPath = path.join(__dirname);
  }
  var options = {
    root: rootPath,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = 'index.html';
  res.sendFile('index.html', options);
});


var server = app.listen(port, "localhost" , function () {
  var host = server.address().address;
  console.log('Example app listening at http://%s:%s', host, port)
})
