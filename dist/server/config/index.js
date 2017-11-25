'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var secret = exports.secret = process.env.SECRET || 'miclavesecreta';
var mongoUrl = exports.mongoUrl = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/question-overflow';
var port = exports.port = process.env.PORT || 3000;