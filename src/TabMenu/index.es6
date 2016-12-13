import React, {Component, PropTypes} from 'react';

require('./style');

class TabMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    };

    this.bodyClick = this.bodyClick.bind(this);
  }

  bodyClick(event) {
    this.setState({
      activeItem: null
    });
  }

  componentDidMount() {
    document.addEventListener('click', this.bodyClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.bodyClick);
  }

  handleClick(event, item, index, type) {
    event.stopPropagation();
    this.props.onChange(item);

    if(type == 'main'){
      const newActiveItem = index == this.state.activeItem? null: index;
      setTimeout(() => {
        this.setState({
          activeItem: newActiveItem
        });
      });
    }

    if(type == 'sub'){
      this.setState({
        activeItem: null
      });
    }

  }

  render() {
    const {menus, shadow} = this.props;
    const width = 100 / menus.length;

    const {activeItem} = this.state;

    return (
      <div className='menu-shadow tab-bar-container'>
        {
          menus.map((item, index) => {
            return (
              <div onClick={(event) => {
                this.handleClick(event, item, index, 'main');
              }} style={{width: width+'%'}} className='item' key={'item-'+index}>
                <i className={`icon ${item.icon}`}></i>
                <span className='text'>
                  {item.name}
                </span>
                {
                  item.subMenu? <div style={Object.assign({}, activeItem == index?{display: 'block'}: {})} className='shadow sub-item-box'>
                    {
                      item.subMenu.map((item, index) => {
                        return (
                          <div onClick={(event) => {
                            this.handleClick(event, item, index, 'sub');
                          }} className='sub-item' key={'subItem-'+index}>
                            <i className='icon' className={item.icon}></i>
                            <span className='text'>
                              {item.name}
                            </span>
                          </div>
                        );
                      })
                    }
                  </div>: null
                }
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
  onChange: null
};

TabMenu.propTypes = {
  menus: PropTypes.array,
  onChange: PropTypes.func,
};
export default TabMenu;