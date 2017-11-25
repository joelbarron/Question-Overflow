'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var handleError = exports.handleError = function handleError(err, res) {
  res.status(500).json({
    message: 'An error ocurred',
    error: error
  });
};