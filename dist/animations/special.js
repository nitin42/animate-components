(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './styledSpecial', './HOC'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./styledSpecial'), require('./HOC'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledSpecial, global.HOC);
    global.special = mod.exports;
  }
})(this, function (exports, _styledSpecial, _HOC) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _HOC2 = _interopRequireDefault(_HOC);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // Special animation components
  var specialObj = {
    Flash: (0, _HOC2.default)('Flash', _styledSpecial.flash),
    RollOut: (0, _HOC2.default)('RollOut', _styledSpecial.rollOut),
    RollIn: (0, _HOC2.default)('RollIn', _styledSpecial.rollIn),
    Rubber: (0, _HOC2.default)('Rubber', _styledSpecial.rubber),
    Swing: (0, _HOC2.default)('Swing', _styledSpecial.swing),
    Zoom: (0, _HOC2.default)('Zoom', _styledSpecial.zoom),
    Hinge: (0, _HOC2.default)('Hinge', _styledSpecial.hinge),
    Pulse: (0, _HOC2.default)('Pulse', _styledSpecial.pulse),
    ExpandUp: (0, _HOC2.default)('ExpandUp', _styledSpecial.expandUp),
    Entrance: (0, _HOC2.default)('Entrance', _styledSpecial.entrance),
    Hatch: (0, _HOC2.default)('Hatch', _styledSpecial.hatch)
  };

  exports.default = specialObj;
});