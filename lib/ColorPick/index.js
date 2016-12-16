'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    textAlign: 'center',
    position: 'relative',
    width: '180px',
    height: '180px',
    margin: 'auto',
    userSelect: 'none'
  },
  canvas: {
    position: 'absolute',
    left: '50%',
    marginLeft: '-90px'
  },
  panle: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: '-20px',
    marginTop: '-20px',
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 10px 0px rgba(0, 0, 0, 0.08)',
    textAlign: 'center'
  },
  icon: {
    display: 'block',
    width: '42px',
    height: '42px',
    left: '50%',
    top: '50%',
    position: 'absolute',
    marginLeft: '-21px',
    marginTop: '-21px'
  }
};

//色卡
var colorImage = require('./color.png');
var lightImg = require('./ic_lamp.png');

var ColorPick = function (_Component) {
  _inherits(ColorPick, _Component);

  function ColorPick(props) {
    _classCallCheck(this, ColorPick);

    var _this = _possibleConstructorReturn(this, (ColorPick.__proto__ || Object.getPrototypeOf(ColorPick)).call(this, props));

    _this.onmousedown = _this.onmousedown.bind(_this);
    _this.onmousemove = _this.onmousemove.bind(_this);
    _this.onmouseup = _this.onmouseup.bind(_this);
    _this.getColor = _this.getColor.bind(_this);

    _this.state = {
      color: props.color
    };
    _this.clickState = false;

    //判断点击事件类型
    _this.hasTouch = 'ontouchstart' in window, _this.startEvent = _this.hasTouch ? 'touchstart' : 'mousedown';
    _this.moveEvent = _this.hasTouch ? 'touchmove' : 'mousemove';
    _this.endEvent = _this.hasTouch ? 'touchend' : 'mouseup';
    return _this;
  }

  _createClass(ColorPick, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.color != this.props.color) {
        this.setState({
          color: nextProps.color
        });
      }
    }

    //处理一个数组，数组内容是rgb颜色，把它转换成文字

  }, {
    key: 'getColor',
    value: function getColor(c) {
      var red = c[0];
      var green = c[1];
      var blue = c[2];
      var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
      return color;
    }
  }, {
    key: 'onmousedown',
    value: function onmousedown(event) {
      //兼容事件
      var e = this.hasTouch ? event.touches[0] : event;

      this.clickState = true;
      //获取原始坐标
      var originalPosition = {
        x: e.pageX,
        y: e.pageY
      };
      //距离window的坐标
      var position = this.windowToCanvas(this.canvas, e.pageX, e.pageY);
      //isCrossing的值代表是否命中色卡
      var isCrossing = this.crossingCorrect(position.x, position.y, this.props.radius, this.props.radius, this.props.radius);
      if (isCrossing) {
        //触发回调，这里写这个回调是为了给开发者处理一些特殊的问题
        this.props.onMouseDownIsHit(false, originalPosition);
        return;
      } else {
        this.props.onMouseDownIsHit(true, originalPosition);
      }
      var c = this.ctx.getImageData(position.x, position.y, 1, 1).data;
      var color = this.getColor(c);
      this.props.onChange(color);
    }
  }, {
    key: 'onmousemove',
    value: function onmousemove(event) {
      if (this.clickState) {
        //兼容事件
        var e = this.hasTouch ? event.touches[0] : event;
        var position = this.windowToCanvas(this.canvas, e.pageX, e.pageY);
        var isCrossing = this.crossingCorrect(position.x, position.y, this.props.radius, this.props.radius, this.props.radius);
        if (isCrossing) {
          return;
        }
        var c = this.ctx.getImageData(position.x, position.y, 1, 1).data;
        var color = this.getColor(c);
        this.props.onChange(color);
      }
    }

    //判断是否命中色卡

  }, {
    key: 'crossingCorrect',
    value: function crossingCorrect(x, y, x1, y1, radius) {
      //x是事件触发点  x1是圆心
      var sideX = x1 - x;
      var sideY = y1 - y;
      //求半径
      var pointRadius = Math.sqrt(Math.pow(sideX, 2) + Math.pow(sideY, 2));

      if (pointRadius > radius) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'onmouseup',
    value: function onmouseup(e) {
      if (this.clickState) {
        this.clickState = false;
        //触发回调
        this.props.onChangeEnd(this.state.color);
      }
    }

    //计算距离window的位置

  }, {
    key: 'windowToCanvas',
    value: function windowToCanvas(canvas, x, y) {
      var bbox = canvas.getBoundingClientRect();
      var positionX = x - bbox.left * (canvas.width / bbox.width);
      var positionY = y - bbox.top * (canvas.height / bbox.height);
      return { x: positionX, y: positionY };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var image = new Image();
      image.src = colorImage;
      image.onload = function () {
        //渲染色卡
        _this2.ctx = _this2.canvas.getContext('2d');
        _this2.ctx.drawImage(image, 0, 0, _this2.props.radius * 2, _this2.props.radius * 2);
      };

      //判断事件类型 添加监听
      this.canvas.addEventListener(this.startEvent, this.onmousedown);
      document.addEventListener(this.moveEvent, this.onmousemove);
      document.addEventListener(this.endEvent, this.onmouseup);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //销毁
      document.removeEventListener(this.moveEvent, this.onmousemove);
      document.removeEventListener(this.endEvent, this.onmouseup);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { style: Object.assign({}, styles.container, { width: this.props.radius * 2, height: this.props.radius * 2 }) },
        _react2.default.createElement('canvas', {
          style: Object.assign({}, styles.canvas, { marginLeft: -this.props.radius + 'px' }),
          ref: function ref(c) {
            _this3.canvas = c;
          },
          width: this.props.radius * 2,
          height: this.props.radius * 2 }),
        _react2.default.createElement('div', {
          style: Object.assign({}, styles.panle, { backgroundColor: this.state.color }) }),
        _react2.default.createElement('img', { style: styles.icon, src: lightImg })
      );
    }
  }]);

  return ColorPick;
}(_react.Component);

ColorPick.propTypes = {
  onMouseDownIsHit: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  onChangeEnd: _react.PropTypes.func,
  radius: _react.PropTypes.number,
  color: _react.PropTypes.string
};

ColorPick.defaultProps = {
  onMouseDownIsHit: function onMouseDownIsHit() {},
  onChange: function onChange() {},
  onChangeEnd: function onChangeEnd() {},
  radius: 90,
  color: 'rgb(0, 227, 255)'
};

exports.default = ColorPick;