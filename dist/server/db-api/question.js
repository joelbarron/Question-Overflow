'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _models = require('../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var debug = new _debug2.default('question-overflow:db-api:questions');

exports.default = {
  findAll: function findAll() {
    var sort = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '-createdAt';

    debug('Finding all questions');

    return _models.Question.find().populate('answers').sort(sort);
  },

  findById: function findById(_id) {
    debug('Finding question with id: ' + _id);

    return _models.Question.findOne({ _id: _id }).populate('user').populate({
      path: 'answers',
      options: { sort: '-createdAt' },
      populate: {
        path: 'user',
        model: 'User'
      }
    });
  },

  createQuestion: function createQuestion(q) {
    debug('Creating new question ' + q);

    var question = new _models.Question(q);
    return question.save();
  },

  createAnswer: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(q, a) {
      var answer, savedAnswer;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              debug('Creating new answer for question: ' + q._id);

              answer = new _models.Answer(a);
              _context.next = 4;
              return answer.save();

            case 4:
              savedAnswer = _context.sent;

              q.answers.push(savedAnswer);
              _context.next = 8;
              return q.save();

            case 8:
              return _context.abrupt('return', savedAnswer);

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function createAnswer(_x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }()

};