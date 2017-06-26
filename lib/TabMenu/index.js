import React, { Component, PropTypes } from 'react';

require('./style.css');

class TabMenu extends Component {

  handleClick(event, item, index, type) {
    event.stopPropagation();
    this.props.onChange(item);
  }

  render() {
    const { menus, shadow, boxStyle, textStyle, activeTextStyle } = this.props;
    const width = 100 / menus.length;
    return React.createElement(
      'div',
      { className: 'menu-shadow tab-bar-container', style: boxStyle },
      menus.map((item, index) => {
        let isActive = item.isActive;
        isActive = isActive === 'true' || isActive === true;

        return React.createElement(
          'div',
          { onClick: event => {
              this.handleClick(event, item, index, 'main');
            }, style: Object.assign({}, { width: width + '%' }, isActive ? activeTextStyle : textStyle), className: 'item', key: 'item-' + index },
          React.createElement('div', { className: 'over-layer' }),
          React.createElement('i', { className: `icon ${ item.icon }` }),
          React.createElement(
            'span',
            { className: 'text' },
            item.name
          )
        );
      }),
      React.createElement('div', { style: { clear: 'both' } })
    );
  }
}

TabMenu.defaultProps = {
  menus: [{ name: '白灯', icon: 'mdi mdi-lightbulb-outline' }, { name: '彩灯', icon: 'mdi mdi-lightbulb-on-outline' }, { name: '场景', icon: 'mdi mdi-apps' }, { name: '定时', icon: 'mdi mdi-timer' }],
  onChange: () => {},
  boxStyle: {},
  textStyle: {},
  activeTextStyle: {}
};

TabMenu.propTypes = {
  menus: PropTypes.array,
  onChange: PropTypes.func,
  boxStyle: PropTypes.object,
  textStyle: PropTypes.object,
  activeTextStyle: PropTypes.object
};
export default TabMenu;