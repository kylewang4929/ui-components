var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component, PropTypes } from 'react';

require('./style.css');

const styles = {
  container: {
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  inner: {
    display: 'inline-block',
    width: '70%',
    maxWidth: '300px',
    margin: 'auto',
    position: 'relative',
    fontSize: '12px'
  },
  item: {
    display: 'inline-block',
    width: '50%',
    overflow: 'hidden',
    textAlign: 'center',
    color: '#fff',
    boxSizing: 'border-box',
    padding: '20px 0px 20px 0px'
  },
  verticalLine: {
    position: 'absolute',
    height: '100%',
    width: '1px',
    backgroundColor: 'rgba(255,255,255,0.3)',
    left: '50%',
    top: '0px'
  },
  horizontalLine: {
    position: 'absolute',
    height: '1px',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    top: '50%',
    left: '0px'
  },
  label: {
    marginBottom: '6px',
    color: 'rgba(255,255,255,0.6)'
  },
  value: {
    fontSize: '30px'
  },
  unit: {
    fontSize: '12px',
    marginLeft: '4px',
    color: 'rgba(255,255,255,0.6)'
  }
};

class InfoPanel extends Component {
  render() {
    const { lineStyle, data, labelStyle, valueStyle, unitStyle } = this.props;
    let infoData = Object.assign([], data);
    if (infoData.length > 4) {
      infoData = infoData.slice(0, 4);
    }

    let lineDom = null;
    if (infoData.length > 1 && infoData.length <= 2) {
      lineDom = React.createElement('div', { style: _extends({}, styles.verticalLine, lineStyle) });
    }

    if (infoData.length > 2) {
      lineDom = [React.createElement('div', { key: 'border1', style: _extends({}, styles.verticalLine, lineStyle) }), React.createElement('div', { key: 'border2', style: _extends({}, styles.horizontalLine) })];
    }

    return React.createElement(
      'div',
      { style: styles.container },
      React.createElement(
        'div',
        { style: styles.inner },
        data.map((item, index) => {

          let padding = {};
          if (index < 2) {
            padding = {
              paddingTop: '10px',
              paddingBottom: '10px'
            };
          } else {
            padding = {
              paddingTop: '20px',
              paddingBottom: '6px'
            };
          }

          return React.createElement(
            'div',
            { style: _extends({}, styles.item, padding), key: index },
            React.createElement(
              'div',
              { style: _extends({}, styles.label, labelStyle) },
              item.label
            ),
            React.createElement(
              'div',
              { style: _extends({}, styles.value, valueStyle) },
              item.value,
              React.createElement(
                'span',
                { style: _extends({}, styles.unit, unitStyle) },
                item.unit
              )
            )
          );
        }),
        lineDom
      )
    );
  }
}

InfoPanel.defaultProps = {
  data: [{ label: 'VOC', value: 10, unit: '' }, { label: '滤网', value: 20, unit: '%' }, { label: '滤网', value: 20, unit: '%' }, { label: '滤网', value: 20, unit: '%' }],
  lineStyle: {},
  labelStyle: {},
  valueStyle: {},
  unitStyle: {}
};

InfoPanel.propTypes = {
  data: PropTypes.array,
  lineStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  valueStyle: PropTypes.object,
  unitStyle: PropTypes.object
};
export default InfoPanel;