var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component, PropTypes } from 'react';
const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px',
    backgroundColor: '#fff'
  },
  verticalOuter: {
    display: 'table',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    paddingBottom: '100px'
  },
  verticalMiddle: {
    display: 'table-cell',
    verticalAlign: 'middle',
    width: '100%',
    height: '100%',
    textAlign: 'center'
  },
  text: {
    fontSize: '12px',
    color: '#828282'
  },
  icon: {
    color: '#828282',
    fontSize: '70px',
    position: 'absolute',
    left: '50%',
    marginLeft: '-35px',
    marginTop: '-100px'
  }
};

class InputTipsPage extends Component {

  render() {
    const { pageStyle, iconStyle, textStyle, icon, text } = this.props;
    return React.createElement(
      'div',
      { style: _extends({}, styles.container, styles.verticalOuter, pageStyle) },
      React.createElement(
        'div',
        { style: _extends({}, styles.box, styles.verticalMiddle) },
        React.createElement('i', { className: icon, style: _extends({}, styles.icon, iconStyle) }),
        React.createElement(
          'span',
          { style: _extends({}, styles.text, textStyle) },
          text
        )
      )
    );
  }
}

InputTipsPage.defaultProps = {
  onClick: () => {},
  iconStyle: {},
  textStyle: {},
  pageStyle: {},
  icon: 'mdi mdi-share',
  text: '请在此处输入需要连接的设备的Did'
};
InputTipsPage.propTypes = {
  onClick: PropTypes.func,
  iconStyle: PropTypes.object,
  textStyle: PropTypes.object,
  pageStyle: PropTypes.object
};
export default InputTipsPage;