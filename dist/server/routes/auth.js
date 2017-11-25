'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config');

var _models = require('../models');

var _utils = require('../utils');

var _bcryptjs = require('bcryptjs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var debug = new _debug2.default('question-overflow:auth');

var app = _express2.default.Router();

// ::/api/auth/signin
app.post('/signin', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, email, password, user, token, handleLoginFailed;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            handleLoginFailed = function handleLoginFailed(res, message) {
              return res.status(401).json({
                message: 'Login failed',
                error: message || 'Email and password don\'t match'
              });
            };

            _context.prev = 1;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;

            // buscar el usuario en la db

            _context.next = 5;
            return _models.User.findOne({ email: email });

          case 5:
            user = _context.sent;

            if (user) {
              _context.next = 9;
              break;
            }

            debug('User with email: ' + email + ' not found');
            return _context.abrupt('return', handleLoginFailed(res));

          case 9:
            if ((0, _bcryptjs.compareSync)(password, user.password)) {
              _context.next = 12;
              break;
            }

            debug('Passwords do not match: ' + password + ' !== ' + user.password);
            return _context.abrupt('return', handleLoginFailed(res, 'El correo y la contraseña no coinciden'));

          case 12:

            // crear token
            token = createToken(user);


            res.status(200).json({
              message: 'Login succeded',
              token: token,
              userId: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            });
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context['catch'](1);

            (0, _utils.handleError)(_context.t0, res);

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 16]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

// ::/api/auth/signup
app.post('/signup', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, firstName, lastName, email, password, u, user, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, firstName = _req$body2.firstName, lastName = _req$body2.lastName, email = _req$body2.email, password = _req$body2.password;
            u = new _models.User({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: (0, _bcryptjs.hashSync)(password, 10)
            });


            debug('Creating new user: ' + u);

            _context2.next = 6;
            return u.save();

          case 6:
            user = _context2.sent;


            // crear token
            token = createToken(user);


            res.status(201).json({
              message: 'User saved',
              token: token,
              userId: user._id,
              firstName: firstName,
              lastName: lastName,
              email: email
            });
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2['catch'](0);

            (0, _utils.handleError)(_context2.t0, res);

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 11]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

//                  :: FUNCIONES ::

// funcion para crear token
var createToken = function createToken(user) {
  return _jsonwebtoken2.default.sign({ user: user }, _config.secret, { expiresIn: 86400 });
};

exports.default = app;