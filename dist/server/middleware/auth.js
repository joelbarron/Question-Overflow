'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requiredUserMiddleware = undefined;

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _config = require('../config');

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = new _debug2.default('question-overflow:auth');

// middleware para validar la autenticacion
var requiredUserMiddleware = exports.requiredUserMiddleware = function requiredUserMiddleware(req, res, next) {
  _jsonwebtoken2.default.verify(req.query.token, _config.secret, function (err, token) {
    if (err) {
      debug('JWT was not encrypted with our secret');
      return res.status(401).json({
        message: 'Unauthorized',
        error: err
      });
    }

    debug('Token verified ' + token);
    req.user = token.user;
    next();
  });
};