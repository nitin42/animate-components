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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * High Order Component
 * @param {string} componentName - Name of the animation component
 * @param {string} keyframes - Keyframes defined for the animation
 */
var HOC = function HOC(ComposedComponent, AnimationName) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        styles: {}
      }, _this.componentDidMount = function () {
        _this.store(_this.props);
      }, _this.store = function (props) {
        var duration = props.duration,
            timingFunction = props.timingFunction,
            delay = props.delay,
            direction = props.direction,
            iterations = props.iterations,
            backfaceVisible = props.backfaceVisible,
            fillMode = props.fillMode,
            playState = props.playState;


        _this.setState({
          styles: {
            // All the animations have vendor prefixes so just simply setState.
            animation: AnimationName + " " + duration + " " + timingFunction + " " + delay + " " + iterations + " " + direction + " " + fillMode + " " + playState,
            backfaceVisibility: "" + backfaceVisible
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

    // Avoid re-render (Performance bottleneck)


    _createClass(_class, [{
      key: "render",
      value: function render() {
        return this.props.block ? this.renderRootWithBlock() : this.renderRootWithInline();
      }
    }]);

    return _class;
  }(_react.Component), _class.propTypes = {
    direction: _propTypes2.default.oneOf(["normal", "reverse", "alternate", "alternate-reverse", "initial", "inherit"]),
    fillMode: _propTypes2.default.oneOf(["none", "forwards", "backwards", "both"]),
    playState: _propTypes2.default.oneOf(["paused", "running"]),
    timingFunction: _propTypes2.default.oneOf(["linear", "ease", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"]),
    backfaceVisible: _propTypes2.default.oneOf(["visible", "hidden"]),
    children: function children(props, propName, componentName) {
      var prop = props[propName];

      if (_react2.default.Children.count(prop) === 0) {
        console.error("Warning: " + ComposedComponent + " should have atleast a single child element.");
      } else {
        return;
      }
    }
  }, _class.defaultProps = {
    duration: "1s",
    timingFunction: "ease",
    delay: "0s",
    direction: "normal",
    iterations: "1",
    backfaceVisible: "visible",
    fillMode: "none",
    playState: "running"
  }, _temp2;
};

exports.default = HOC;