var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component, PropTypes } from 'react';
require('./style.css');
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
    height: '100%'
  },
  box: {
    textAlign: 'center',
    color: '#828282'
  },
  icon: {
    fontSize: '140px'
  },
  text: {
    display: 'block',
    fontSize: '13px'
  },
  ul: {
    width: '240px',
    margin: 'auto',
    padding: '20px 0px',
    fontSize: '12px'
  },
  li: {
    position: 'relative',
    padding: '4px 0px 4px 12px'
  },
  liPoint: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    marginTop: '-5px',
    left: "-14px",
    backgroundColor: 'rgb(22, 175, 203)'
  },
  liText: {
    position: 'relative'
  },
  button: {}
};

class ErrorPage extends Component {

  render() {
    const { pageStyle, iconStyle, textStyle, buttonStyle, onClick, icon, text, buttonText, textList } = this.props;
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
        ),
        React.createElement(
          'div',
          { style: styles.ul },
          textList.map((item, index) => {
            return React.createElement(
              'div',
              { style: styles.li, key: 'error-list-key' + index },
              React.createElement(
                'span',
                { style: styles.liText },
                React.createElement('div', { style: styles.liPoint }),
                item
              )
            );
          })
        ),
        onClick ? React.createElement(
          'div',
          { style: _extends({}, styles.button, buttonStyle), className: 'error-page-button', onClick: onClick },
          React.createElement('div', { className: 'over-layer' }),
          buttonText
        ) : null
      )
    );
  }
}

ErrorPage.defaultProps = {
  onClick: null,
  iconStyle: {},
  textStyle: {},
  pageStyle: {},
  buttonStyle: {},
  icon: 'mdi mdi-close-circle',
  text: '连接设备失败',
  buttonText: '重试',
  textList: ['设备是否正常运行', 'Wi-Fi网络是否连接顺畅', '请拔下设备电源，再重新接通电源，再重试']
};
ErrorPage.propTypes = {
  onClick: PropTypes.func,
  iconStyle: PropTypes.object,
  textStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  pageStyle: PropTypes.object,
  icon: PropTypes.string
};
export default ErrorPage;