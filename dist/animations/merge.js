"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsShallowCompare = require("react-addons-shallow-compare");

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _mergeValidators = require("../utils/mergeValidators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <Merge one two inline />

var validators = {
  prop: _propTypes2.default.objectOf(function (propValue, key, componentName, location, propFullName) {
    (0, _mergeValidators.names)(key, propValue);
    (0, _mergeValidators.duration)(key, propValue);
    (0, _mergeValidators.timingFunction)(key, propValue);
    (0, _mergeValidators.propValidators)(key);
  })
};

/**
 * Merge Component
 */
var Merge = function (_Component) {
  _inherits(Merge, _Component);

  function Merge() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Merge);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Merge.__proto__ || Object.getPrototypeOf(Merge)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      styles: {}
    }, _this.componentDidMount = function () {
      _this.store(_this.props);
    }, _this.store = function (props) {
      // <Merge one={} two={} />
      var one = props.one,
          two = props.two;

      // Not destructuring, same keys causes collision. (difficulties with defaultProps)

      _this.setState({
        styles: {
          animation: (one["name"] || "") + " " + (one["dr"] || "2s") + " " + (one["tf"] || "ease-in") + ", " + (two["name"] || "") + " " + (two["dr"] || "2s") + " " + (two["tf"] || "ease-in"),
          // For some animations like rotate and flip.
          backfaceVisibility: "visible"
        }
      });
    }, _this.shouldComponentUpdate = function (nextProps, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(_this, nextProps, nextState);
    }, _this.renderRootWithBlock = function () {
      var styles = Object.assign({}, _this.state.styles, {
        display: "block"
      });
      return _react2.default.createElement(
        "div",
        { style: styles },
        _this.props.children
      );
    }, _this.renderRootWithInline = function () {
      var styles = Object.assign({}, _this.state.styles, {
        display: "inline-block"
      });

      return _react2.default.createElement(
        "span",
        { style: styles },
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // ?


  // Performance bottleneck (avoid re-render)


  _createClass(Merge, [{
    key: "render",
    value: function render() {
      return this.props.inline ? this.renderRootWithInline() : this.renderRootWithBlock();
    }
  }]);

  return Merge;
}(_react.Component);

Merge.defaultProps = {
  one: {},
  two: {}
};
Merge.propTypes = {
  one: validators.prop,
  two: validators.prop,
  children: function children(props, propName, componentName) {
    var prop = props[propName];

    if (_react2.default.Children.count(prop) === 0) {
      return new Error("Merge component should have atleast a single child element.");
    }
  }
};
exports.default = Merge;