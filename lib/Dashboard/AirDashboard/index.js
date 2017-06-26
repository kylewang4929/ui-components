'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    textAlign: 'center',
    width: '220px',
    height: '220px',
    position: 'relative',
    margin: 'auto'
  },
  canvas: {},
  content: {
    position: 'absolute',
    left: '0px',
    top: '50%',
    marginTop: '-52px',
    width: '100%',
    color: '#fff'
  },
  title: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.9)'
  },
  value: {
    fontSize: '60px',
    margin: '12px 0px 12px 0px',
    lineHeight: '1'
  },
  sub: {
    color: 'rgba(255,255,255,0.6)'
  },
  sup: {
    transform: 'scale(0.6,0.6)'
  },
  tips: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.9)'
  },
  pointBox: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%'
  }
};

var AirDashboard = function (_Component) {
  _inherits(AirDashboard, _Component);

  function AirDashboard(props) {
    _classCallCheck(this, AirDashboard);

    /**
     * 创建粒子动画
     */
    var _this = _possibleConstructorReturn(this, (AirDashboard.__proto__ || Object.getPrototypeOf(AirDashboard)).call(this, props));

    _this.state = {
      particleDom: _this.createParticle(_this.props.particleNumber, { color: _this.props.particleColor })
    };
    return _this;
  }

  //根据数量创建粒子元素


  _createClass(AirDashboard, [{
    key: 'createParticle',
    value: function createParticle(num, props) {
      var particleDom = [];
      for (var i = 0; i < num; i++) {
        particleDom.push(_react2.default.createElement(Point, _extends({}, props, { key: i })));
      }
      return particleDom;
    }

    //canvas的绘制方法

  }, {
    key: 'draw',
    value: function draw(_ref) {
      var radian = _ref.radian,
          radius = _ref.radius,
          ringBgColor = _ref.ringBgColor,
          ringShadowBlur = _ref.ringShadowBlur,
          ringShadowColor = _ref.ringShadowColor,
          ringEndColor = _ref.ringEndColor,
          ringStarColor = _ref.ringStarColor;

      this.ctx.clearRect(0, 0, radius * 2, radius * 2);
      this.ctx.beginPath();
      this.ctx.shadowBlur = 0;
      this.ctx.shadowColor = 'rgba(0,0,0,0)';
      this.ctx.lineCap = "round";
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = ringBgColor; //生成的颜色块赋值给样式
      this.ctx.arc(radius, radius, radius - 10, 0, 2 * Math.PI, false);
      this.ctx.stroke();

      //画渐变
      this.ctx.beginPath();
      this.ctx.shadowBlur = ringShadowBlur;
      this.ctx.shadowColor = ringShadowColor;
      var grd = this.ctx.createLinearGradient(0, radius, radius * 2, radius);
      grd.addColorStop(1, ringEndColor); //0表示起点..0.1 0.2 ...1表示终点，配置颜色
      grd.addColorStop(0, ringStarColor);
      this.ctx.lineWidth = 4;
      this.ctx.strokeStyle = grd; //生成的颜色块赋值给样式
      this.ctx.arc(radius, radius, radius - 10, 0, radian, false);
      this.ctx.stroke();
    }

    //绘制canvas

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.ctx = this.canvasDom.getContext('2d');
      var radian = Math.PI / 180 * 180;
      this.draw(_extends({ radian: radian }, this.props));
    }

    //如果粒子数量改变了，则重新绘制

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.particleNumber != nextProps.particleNumber) {
        this.setState({
          particleDom: this.createParticle(nextProps.particleNumber, { color: nextProps.particleColor })
        });
      }
      if (this.props.particleColor != nextProps.particleColor) {
        this.setState({
          particleDom: this.createParticle(nextProps.particleNumber, { color: nextProps.particleColor })
        });
      }
      //重新绘制
      var radian = Math.PI / 180 * 180;
      setTimeout(function () {
        _this2.draw(_extends({ radian: radian }, nextProps));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'air-dashboard', style: Object.assign({}, styles.container, { width: this.props.radius * 2, height: this.props.radius * 2 }) },
        _react2.default.createElement(
          'div',
          { style: styles.pointBox },
          this.state.particleDom
        ),
        _react2.default.createElement('canvas', {
          className: 'rain-animation',
          style: styles.canvas,
          ref: function ref(c) {
            _this3.canvasDom = c;
          },
          width: this.props.radius * 2,
          height: this.props.radius * 2 }),
        _react2.default.createElement(
          'div',
          { style: styles.content },
          _react2.default.createElement(
            'div',
            { style: Object.assign({}, styles.title, this.props.titleStyle) },
            this.props.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'value-text', style: Object.assign({}, styles.value, this.props.valueStyle) },
            this.props.value
          ),
          _react2.default.createElement(
            'div',
            { style: Object.assign({}, styles.tips, this.props.tipsStyle) },
            this.props.tips
          )
        )
      );
    }
  }]);

  return AirDashboard;
}(_react.Component);

AirDashboard.defaultProps = {
  radius: 110,
  ringStarColor: 'rgba(255,255,255,1)',
  ringEndColor: 'rgba(255,255,255,0.1)',
  value: 12,
  valueStyle: {},
  ringBgColor: 'rgba(255,255,255,0.3)',
  particleNumber: 27,
  particleColor: 'rgba(255,255,255,0.4)',
  title: _react2.default.createElement(
    'span',
    null,
    '\u5BA4\u5185PM2.5',
    _react2.default.createElement(
      'sub',
      { style: styles.sub },
      'ug/m',
      _react2.default.createElement(
        'sup',
        { style: styles.sup },
        '2'
      )
    )
  ),
  titleStyle: {},
  tips: 'PM2.5记录',
  tipsStyle: {},
  ringShadowColor: '#fff',
  ringShadowBlur: 10
};

AirDashboard.propTypes = {
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.element]),
  radius: _react.PropTypes.number,
  ringColor: _react.PropTypes.string,
  ringBgColor: _react.PropTypes.string,
  particleNumber: _react.PropTypes.number,
  particleColor: _react.PropTypes.string,
  title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  tips: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  valueStyle: _react.PropTypes.object,
  tipsStyle: _react.PropTypes.object,
  titleStyle: _react.PropTypes.object,
  ringShadowColor: _react.PropTypes.string,
  ringShadowBlur: _react.PropTypes.number
};

var pointStyles = {
  point: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    left: '0px',
    top: '0px',
    position: 'absolute'
  }
};

var Point = function (_Component2) {
  _inherits(Point, _Component2);

  function Point(props) {
    _classCallCheck(this, Point);

    var _this4 = _possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).call(this, props));

    _this4.createAnimate = _this4.createAnimate.bind(_this4);
    _this4.createAnimate();
    _this4.state = {
      css: {
        left: _this4.left,
        top: _this4.top,
        transform: 'scale(1)',
        width: '0px',
        height: '0px'
      },
      class: ''
    };

    _this4.timeOutHandle = null;

    _this4.transitionEnd = _this4.transitionEnd.bind(_this4);
    _this4.transitionEvent = _this4.whichTransitionEvent();
    return _this4;
  }

  //分析支持哪个事件


  _createClass(Point, [{
    key: 'whichTransitionEvent',
    value: function whichTransitionEvent() {
      var t = void 0,
          el = document.createElement('surface'),
          transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      };

      for (t in transitions) {
        if (el.style[t] !== undefined) {
          return transitions[t];
        }
      }
    }

    //创建随机动画

  }, {
    key: 'createAnimate',
    value: function createAnimate() {
      this.animateClass = parseInt(Math.random() * 1000) % 2 ? 'point-animation-left' : 'point-animation-right';
      this.left = 0;
      this.top = 0;

      if (parseInt(Math.random() * 1000) % 2) {
        if (parseInt(Math.random() * 1000) % 2) {
          this.left = Math.random() * 300;
          this.top = Math.random() * 300;
        } else {
          this.top = Math.random() * -30;
          this.left = Math.random() * -30;
        }
      } else {
        if (parseInt(Math.random() * 1000) % 2) {
          this.left = Math.random() * -30;
          this.top = Math.random() * 300;
        } else {
          this.left = Math.random() * 300;
          this.top = Math.random() * -30;
        }
      }

      this.width = Math.random() * 8;
      this.timeOut = Math.random() * 10000;
    }
  }, {
    key: 'transitionEnd',
    value: function transitionEnd() {
      var _this5 = this;

      //销毁事件
      this.dom.removeEventListener(this.transitionEvent, this.transitionEnd);
      //重置元素状态
      this.createAnimate();
      this.setState({
        class: ''
      });
      this.setState({
        css: {
          left: this.left,
          top: this.top,
          transform: 'scale(1)',
          width: '0px',
          height: '0px'
        },
        class: ''
      });

      //重新添加动画结束监听
      this.transitionEvent && this.dom.addEventListener(this.transitionEvent, this.transitionEnd);

      //启动动画
      clearTimeout(this.transitionEndTimeout);
      this.transitionEndTimeout = setTimeout(function () {
        _this5.setState({
          class: _this5.animateClass,
          css: {
            left: '50%',
            width: _this5.width,
            height: _this5.width,
            top: '50%',
            transform: 'scale(0)'
          }
        });
      }, this.timeOut);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this6 = this;

      clearTimeout(this.timeOutHandle);
      this.timeOutHandle = setTimeout(function () {
        //设置开始时的动画
        _this6.setState({
          class: _this6.animateClass
        });
        _this6.setState({
          css: {
            left: '50%',
            width: _this6.width,
            height: _this6.width,
            top: '50%',
            transform: 'scale(0)'
          }
        });
      }, this.timeOut);
      //监听动画结束的回调
      this.transitionEvent && this.dom.addEventListener(this.transitionEvent, this.transitionEnd);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      //清除定时器
      this.dom.removeEventListener(this.transitionEvent, this.transitionEnd);
      clearTimeout(this.transitionEndTimeout);
      clearTimeout(this.timeOutHandle);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      return _react2.default.createElement('div', { ref: function ref(c) {
          _this7.dom = c;
        },
        className: this.state.class,
        style: Object.assign({}, pointStyles.point, this.state.css, { backgroundColor: this.props.color }) });
    }
  }]);

  return Point;
}(_react.Component);

Point.propTypes = {
  color: _react.PropTypes.string
};

exports.default = AirDashboard;