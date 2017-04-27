'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledExpanse = require('./styledExpanse');

var _HOC = require('../HOC');

var _HOC2 = _interopRequireDefault(_HOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expanseObj = {
  ExpanseUp: (0, _HOC2.default)('ExpanseUp', _styledExpanse.expanseUp),
  ExpanseDown: (0, _HOC2.default)('ExpanseDown', _styledExpanse.expanseDown),
  ExpanseLeft: (0, _HOC2.default)('ExpanseLeft', _styledExpanse.expanseLeft),
  ExpanseRight: (0, _HOC2.default)('ExpanseRight', _styledExpanse.expanseRight)
};

exports.default = expanseObj;