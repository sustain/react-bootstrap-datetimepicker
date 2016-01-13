"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactOverlays = require("react-overlays");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TRANSITION_TIMEOUT = 200;

var Fade = function (_Component) {
    _inherits(Fade, _Component);

    function Fade() {
        _classCallCheck(this, Fade);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Fade).apply(this, arguments));
    }

    _createClass(Fade, [{
        key: "render",
        value: function render() {
            var children = this.props.children;

            return _react2.default.createElement(
                _reactOverlays.Transition,
                _extends({}, this.props, {
                    timeout: TRANSITION_TIMEOUT,
                    className: "fade",
                    enteringClassName: "in",
                    enteredClassName: "in" }),
                children
            );
        }
    }]);

    return Fade;
}(_react.Component);

Fade.propTypes = {
    children: _react2.default.PropTypes.element
};
exports.default = Fade;
//# sourceMappingURL=fade.js.map