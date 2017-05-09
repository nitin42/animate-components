"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propsValidator = require("../utils/propsValidator");

var _getElementType = require("../mods/getElementType");

var _getElementType2 = _interopRequireDefault(_getElementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Merge Component
 */
var Merge = function (_PureComponent) {
  _inherits(Merge, _PureComponent);

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
    }, _this.returnAnimation = function (prop) {
      return (prop["name"] || "") + " " + (prop["dr"] || "2s") + " " + (prop["tf"] || "ease-in");
    }, _this.store = function (props) {
      var one = props.one,
          two = props.two;


      _this.setState({
        styles: {
          animation: "" + (_this.returnAnimation(one), _this.returnAnimation(two)),

          // For some animations like rotate and flip.
          backfaceVisibility: "visible"
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // Also returns default props (will be moved)


  _createClass(Merge, [{
    key: "render",
    value: function render() {
      var ElementType = (0, _getElementType2.default)(Merge, this.props);

      var styles = this.state.styles;
      var children = this.props.children;


      return _react2.default.createElement(
        ElementType,
        { style: styles },
        children
      );
    }
  }]);

  return Merge;
}(_react.PureComponent);

Merge.defaultProps = {
  one: {},
  two: {},
  as: "div"
};
Merge.propTypes = {
  one: _propsValidator.validators.prop,
  two: _propsValidator.validators.prop,
  as: (0, _propsValidator.verifyTags)("Merge"),
  children: (0, _propsValidator.children)("Merge")
};
exports.default = Merge;