var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { PropTypes } from 'react';

export default class Handle extends React.Component {
  render() {
    const { className, vertical, offset, borderColor } = this.props;

    const restProps = _objectWithoutProperties(this.props, ['className', 'vertical', 'offset', 'borderColor']);

    const style = vertical ? { bottom: `${ offset }%` } : { left: `${ offset }%` };
    return React.createElement('div', _extends({}, restProps, { className: className, style: _extends({}, style, { border: '2px solid ' + borderColor }) }));
  }
}

Handle.propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
  offset: PropTypes.number
};