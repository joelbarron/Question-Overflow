'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ObjectId = _mongoose.Schema.Types.ObjectId;


var QuestionSchema = (0, _mongoose.Schema)({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  icon: { type: String, required: true },
  user: { type: ObjectId, ref: 'User', required: true },
  answers: [{ type: ObjectId, ref: 'Answer' }]
});

exports.default = _mongoose2.default.model('Question', QuestionSchema);