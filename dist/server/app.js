'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Orign, X-Request-With, Content-Type, Accept');
    res.setHeader('Access-Control-allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
  });
}

if (process.env.NODE_ENV === 'production') {
  app.use(_express2.default.static(_path2.default.join(process.cwd(), 'dist')));
}

app.use('/api/questions', _routes.question);
app.use('/api/auth', _routes.auth);

exports.default = app;