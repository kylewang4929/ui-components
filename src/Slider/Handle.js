import React, { PropTypes } from 'react';

export default class Handle extends React.Component {
  render() {
    const { className, vertical, offset,borderColor, ...restProps } = this.props;

    const style = vertical ? { bottom: `${offset}%` } : { left: `${offset}%` };
    return <div {...restProps} className={className} style={{...style, border: '2px solid '+borderColor}} />;
  }
}

Handle.propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
  offset: PropTypes.number,
};
