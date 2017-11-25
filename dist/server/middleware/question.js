'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.questionMiddleware = undefined;

var _dbApi = require('../db-api');

var _utils = require('../utils');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var questionMiddleware = exports.questionMiddleware = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _dbApi.question.findById(req.params.id);

          case 3:
            req.question = _context.sent;

            next();
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            (0, _utils.handleError)(_context.t0, res);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 7]]);
  }));

  return function questionMiddleware(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// const currentUser = {
//   firstName: 'Joel',
//   lastName: 'Barron',
//   email: 'correo@dominio.com',
//   password: '123456'
// }

// const qFix = {
//   _id: 1,
//   title: '¿Como reutilizo un componente en android?',
//   description: 'Tengo una pregunta! Estoy desarrollando una app para ...',
//   createdAt: new Date(),
//   icon: 'devicon-android-plain',
//   answers: [],
//   user: currentUser
// }

// export let questionsFix = new Array(10).fill(qFix)


// // middlewares


// export const questionsMiddleware = (req, res, next) => {
//   req.questions = questionsFix
//   next()
// }

// export const questionMiddleware = (req, res, next) => {
//   const { id } = req.params
//   //const q = questions.find(question => question._id === +id) // con el + se transforma a numero el parametro
//   req.question = questionsFix.find(({ _id }) => _id === +id)
//   next()
// }

// function userMiddleware(req, res, next) {
//   req.user = currentUser
//   next()
// }