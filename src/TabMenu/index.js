import React, {Component, PropTypes} from 'react';

require('./style.css');

class TabMenu extends Component {

  handleClick(event, item, index, type) {
    event.stopPropagation();
    this.props.onChange(item);
  }

  render() {
    const {menus, shadow, boxStyle, textStyle, activeTextStyle} = this.props;
    const width = 100 / menus.length;

    return (
      <div className='menu-shadow tab-bar-container' style={boxStyle}>
        {
          menus.map((item, index) => {
            return (
              <div onClick={(event) => {
                this.handleClick(event, item, index, 'main');
              }} style={Object.assign({}, {width: width+'%'}, item.isActive? activeTextStyle: textStyle)} className='item' key={'item-'+index}>
                <i className={`icon ${item.icon}`}></i>
                <span className='text'>
                  {item.name}
                </span>
              </div>
            );
          })
        }
        <div style={{clear: 'both'}}></div>
      </div>
    );
  }
}

TabMenu.defaultProps = {
  menus: [],
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
  activeTextStyle: PropTypes.object,
};
export default TabMenu;