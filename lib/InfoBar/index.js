var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes, Component } from 'react';

const styles = {
  container: {
    width: '80%',
    maxWidth: '400px',
    borderRadius: '8px',
    padding: '14px 20px 15px 20px',
    border: '1px solid rgba(255,255,255,0.4)',
    margin: 'auto',
    fontSize: '13px',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  item: {
    display: 'inline-block',
    paddingLeft: '20px',
    boxSizing: 'border-box'
  },
  icon: {
    verticalAlign: 'middle',
    position: 'absolute',
    display: 'inline-block',
    left: '-20px',
    width: '15px',
    fontSize: '16px',
    top: '-1px',
    color: '#ffee32'
  },
  label: {
    position: 'relative'
  },
  unit: {
    fontSize: '8px',
    position: 'relative',
    left: '4px',
    color: '#ffee32'
  }
};

class InfoBar extends Component {
  render() {
    const { datas } = this.props;
    return React.createElement(
      'div',
      { style: styles.container },
      datas.map((item, index) => {
        return React.createElement(
          'div',
          { style: _extends({}, styles.item, { width: 100 / datas.length + '%' }), key: index },
          React.createElement(
            'span',
            { style: styles.label },
            React.createElement('span', { style: styles.icon, className: item.icon }),
            item.label
          ),
          React.createElement(
            'sup',
            { style: styles.unit },
            item.unit
          )
        );
      })
    );
  }
}

InfoBar.defaultProps = {
  datas: []
};
InfoBar.propTypes = {
  datas: PropTypes.array
};

export default InfoBar;