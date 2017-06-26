import React, { Component, PropTypes } from 'react';

require('./style.css');

const styles = {
  container: {
    position: 'relative',
    width: '220px',
    height: '220px',
    margin: 'auto'
  },
  dashboardImage: {
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '0px',
    right: '0px'
  },
  content: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    top: '50%',
    marginTop: '-60px',
    color: '#fff'
  },
  title: {
    fontSize: '12px'
  },
  value: {
    position: 'relative',
    padding: '2px 0px 8px 0px',
    lineHeight: '1'
  },
  valueText: {
    fontSize: '80px',
    position: 'relative'
  },
  unit: {
    fontSize: '16px',
    position: 'absolute',
    right: '-14px',
    top: '16px'
  },
  state: {
    fontSize: '12px',
    display: 'inline-block',
    position: 'relative',
    padding: '0px 0px 0px 0px'
  }
};

const dashboardImage = require('./dashboard.png');

class BaseDashboard extends Component {

  render() {
    const { value, icon, them } = this.props;
    return React.createElement(
      'div',
      { className: `base-dashboard ${ them }`, style: styles.container },
      React.createElement('img', { src: dashboardImage, style: styles.dashboardImage }),
      React.createElement(
        'div',
        { style: styles.content },
        React.createElement(
          'div',
          { className: 'title', style: Object.assign({}, styles.title, this.props.titleStyle) },
          this.props.title
        ),
        React.createElement(
          'div',
          { className: 'value', style: styles.value },
          React.createElement(
            'span',
            { className: 'transparent-text', style: Object.assign({}, styles.valueText, this.props.valueStyle) },
            value
          )
        ),
        React.createElement(
          'div',
          { className: 'state', style: Object.assign({}, styles.state, this.props.tipsStyle) },
          this.props.tips
        )
      )
    );
  }
}

BaseDashboard.defaultProps = {
  value: 10,
  tips: '制冷中',
  title: '设置温度',
  titleStyle: {},
  tipsStyle: {},
  valueStyle: {},
  them: 'cold'
};

BaseDashboard.propTypes = {
  value: PropTypes.number,
  tips: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleStyle: PropTypes.object,
  tipsStyle: PropTypes.object,
  valueStyle: PropTypes.object,
  them: PropTypes.string
};

export default BaseDashboard;