var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import Tooltip from 'rc-tooltip';

import Handle from './Handle.js';

export default function createSliderWithTooltip(Component) {
  return class ComponentWrapper extends React.Component {
    constructor(props) {
      super(props);

      this.handleTooltipVisibleChange = (index, visible) => {
        this.setState({
          visibles: _extends({}, this.state.visibles, {
            [index]: visible
          })
        });
      };

      this.handleWithTooltip = (_ref) => {
        let { value, dragging, index, disabled } = _ref;

        let restProps = _objectWithoutProperties(_ref, ['value', 'dragging', 'index', 'disabled']);

        return React.createElement(
          Tooltip,
          {
            prefixCls: 'rc-slider-tooltip',
            overlay: value,
            visible: !disabled && (this.state.visibles[index] || dragging),
            onVisibleChange: visible => this.handleTooltipVisibleChange(index, visible),
            placement: 'top',
            key: index
          },
          React.createElement(Handle, restProps)
        );
      };

      this.state = { visibles: {} };
    }

    render() {
      return React.createElement(Component, _extends({}, this.props, { handle: this.handleWithTooltip }));
    }
  };
}