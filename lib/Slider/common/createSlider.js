var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { PropTypes } from 'react';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import classNames from 'classnames';
import warning from 'warning';
import Steps from './Steps.js';
import Marks from './Marks.js';
import Handle from '../Handle.js';
import * as utils from '../utils';

function noop() {}

export default function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = class ComponentEnhancer extends Component {

    constructor(props) {
      super(props);

      this.onMouseDown = e => {
        if (e.button !== 0) {
          return;
        }

        const isVertical = this.props.vertical;
        let position = utils.getMousePosition(isVertical, e);
        if (!utils.isEventFromHandle(e, this.handlesRefs)) {
          this.dragOffset = 0;
        } else {
          const handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        this.onStart(position);
        this.addDocumentMouseEvents();
        utils.pauseEvent(e);
      };

      this.onTouchStart = e => {
        if (utils.isNotTouchEvent(e)) return;

        const isVertical = this.props.vertical;
        let position = utils.getTouchPosition(isVertical, e);
        if (!utils.isEventFromHandle(e, this.handlesRefs)) {
          this.dragOffset = 0;
        } else {
          const handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        this.onStart(position);
        this.addDocumentTouchEvents();
        utils.pauseEvent(e);
      };

      this.onMouseMove = e => {
        if (!this.sliderRef) {
          this.onEnd();
          return;
        }
        const position = utils.getMousePosition(this.props.vertical, e);
        this.onMove(e, position - this.dragOffset);
      };

      this.onTouchMove = e => {
        if (utils.isNotTouchEvent(e) || !this.sliderRef) {
          this.onEnd();
          return;
        }

        const position = utils.getTouchPosition(this.props.vertical, e);
        this.onMove(e, position - this.dragOffset);
      };

      this.saveSlider = slider => {
        this.sliderRef = slider;
      };

      if (process.env.NODE_ENV !== 'production') {
        const { step, max, min } = props;
        warning(step && Math.floor(step) === step ? (max - min) % step === 0 : true, 'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)', max - min, step);
      }

      this.handlesRefs = {};
    }

    componentWillUnmount() {
      if (super.componentWillUnmount) super.componentWillUnmount();
      this.removeDocumentEvents();
    }

    addDocumentTouchEvents() {
      // just work for Chrome iOS Safari and Android Browser
      this.onTouchMoveListener = addEventListener(document, 'touchmove', this.onTouchMove);
      this.onTouchUpListener = addEventListener(document, 'touchend', this.onEnd);
    }

    addDocumentMouseEvents() {
      this.onMouseMoveListener = addEventListener(document, 'mousemove', this.onMouseMove);
      this.onMouseUpListener = addEventListener(document, 'mouseup', this.onEnd);
    }

    removeDocumentEvents() {
      /* eslint-disable no-unused-expressions */
      this.onTouchMoveListener && this.onTouchMoveListener.remove();
      this.onTouchUpListener && this.onTouchUpListener.remove();

      this.onMouseMoveListener && this.onMouseMoveListener.remove();
      this.onMouseUpListener && this.onMouseUpListener.remove();
      /* eslint-enable no-unused-expressions */
    }

    getSliderStart() {
      const slider = this.sliderRef;
      const rect = slider.getBoundingClientRect();

      return this.props.vertical ? rect.top : rect.left;
    }

    getSliderLength() {
      const slider = this.sliderRef;
      if (!slider) {
        return 0;
      }

      return this.props.vertical ? slider.clientHeight : slider.clientWidth;
    }

    calcValue(offset) {
      const { vertical, min, max } = this.props;
      const ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
      const value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
      return value;
    }

    calcValueByPos(position) {
      const pixelOffset = position - this.getSliderStart();
      const nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
      return nextValue;
    }

    calcOffset(value) {
      const { min, max } = this.props;
      const ratio = (value - min) / (max - min);
      return ratio * 100;
    }

    saveHandle(index, handle) {
      this.handlesRefs[index] = handle;
    }

    render() {
      const {
        prefixCls,
        className,
        marks,
        dots,
        step,
        included,
        disabled,
        vertical,
        min,
        max,
        children,
        style
      } = this.props;
      const { tracks, handles } = super.render();

      const sliderClassName = classNames({
        [prefixCls]: true,
        [`${ prefixCls }-with-marks`]: Object.keys(marks).length,
        [`${ prefixCls }-disabled`]: disabled,
        [`${ prefixCls }-vertical`]: vertical,
        [className]: className
      });
      return React.createElement(
        'div',
        {
          ref: this.saveSlider,
          className: sliderClassName,
          style: style
        },
        React.createElement('div', { className: `${ prefixCls }-rail` }),
        tracks,
        React.createElement(Steps, {
          prefixCls: prefixCls,
          vertical: vertical,
          marks: marks,
          dots: dots,
          step: step,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min
        }),
        React.createElement(
          'div',
          {
            onTouchStart: disabled ? noop : this.onTouchStart,
            onMouseDown: disabled ? noop : this.onMouseDown },
          handles
        ),
        React.createElement(Marks, {
          className: `${ prefixCls }-mark`,
          vertical: vertical,
          marks: marks,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min
        }),
        children
      );
    }
  }, _class.displayName = `ComponentEnhancer(${ Component.displayName })`, _class.propTypes = _extends({}, Component.propTypes, {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    marks: PropTypes.object,
    included: PropTypes.bool,
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.any,
    onBeforeChange: PropTypes.func,
    onChange: PropTypes.func,
    onAfterChange: PropTypes.func,
    handle: PropTypes.func,
    dots: PropTypes.bool,
    vertical: PropTypes.bool,
    style: PropTypes.object
  }), _class.defaultProps = _extends({}, Component.defaultProps, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle(_ref) {
      let { index } = _ref;

      let restProps = _objectWithoutProperties(_ref, ['index']);

      delete restProps.dragging;
      delete restProps.value;
      return React.createElement(Handle, _extends({}, restProps, { key: index }));
    },
    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false
  }), _temp;
}