import React, {Component, PropTypes} from 'react';

require('./style.css');

const styles = {
  container: {
    fontSize: '12px',
    padding: '20px'
  },
  title: {
    color: '#fff',
    fontSize: '13px',
    padding: '0px 10px'
  }
};


class BarList extends Component {

  render() {

    const {title, data, titleStyle, labelStyle, valueStyle, indexStyle, itemStyle, listStyle} = this.props;

    return (
      <div style={Object.assign({}, styles.container, listStyle)}>
        <div style={{...styles.title, ...titleStyle}}>{title}</div>
        {
          data.map((item, index) => {
            return (
              <BarItem 
                key={'barItem' + index} 
                itemStyle={itemStyle}
                labelStyle={labelStyle} 
                valueStyle={valueStyle} 
                indexStyle={indexStyle} 
                index={index} 
                {...item}/>
            );
          })
        }
      </div>
    );
  }
}

const itemStyles = {
  container: {
    position: 'relative',
    color: '#fff',
    margin: '14px 0px',
    padding: '16px 40px'
  },
  label: {},
  value: {
    position: 'absolute',
    right: '15px',

  },
  index: {
    position: 'absolute',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    left: '15px',
    color: '#8e8e8e',
    top: '50%',
    fontSize: '12px',
    marginTop: '-8px',
    lineHeight: '18px',
    textAlign: 'center',
  },
  indexText: {
    transform: 'scale(0.8,0.8)',
    WebKitTransform: 'scale(0.8,0.8)',
    display: 'block'
  }
};
class BarItem extends Component {

  render() {
    const {index, value, label, indexStyle, labelStyle, valueStyle, itemStyle} = this.props;
    return (
      <div style={Object.assign({}, itemStyles.container, itemStyle)}>
        <span style={{...itemStyles.index, ...indexStyle}}><span style={itemStyles.indexText}>{index+1}</span></span>
        <span style={{...itemStyles.label, ...labelStyle}}>{label}</span>
        <span style={{...itemStyles.value, ...valueStyle}}>{value}</span>
      </div>
    );
  }
}

BarList.defaultProps = {
  title: '',
  datas: [],
  titleStyle: {},
  indexStyle: {},
  labelStyle: {},
  valueStyle: {},
  itemStyle: {
    "borderColor": "rgba(255,255,255,1)",
    "borderTopWdith": "1px",
    "borderRightWdith": "1px",
    "borderLeftWdith": "1px",
    "borderBottomWdith": "1px", 
    "borderTopStyle": "solid",
    "borderRightStyle": "solid",
    "borderLeftStyle": "solid",
    "borderBottomStyle": "solid",
    "borderTopLeftRadius": "30px",
    "borderTopRightRadius": "30px",
    "borderBottomLeftRadius": "30px",
    "borderBottomRightRadius": "30px"
  }
};

BarList.propTypes = {
  title: PropTypes.string,
  datas: PropTypes.array,
  titleStyle: PropTypes.object,
  indexStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  valueStyle: PropTypes.object,
  itemStyle: PropTypes.object
};

export default BarList;