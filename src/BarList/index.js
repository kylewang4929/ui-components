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

    const {title, datas, titleStyle, labelStyle, valueStyle, indexStyle} = this.props;

    return (
      <div style={styles.container}>
        <div style={{...styles.title, ...titleStyle}}>{title}</div>
        {
          datas.map((item, index) => {
            return (
              <BarItem 
                key={'barItem' + index} 
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
    borderRadius: '30px',
    border: '1px solid #fff',
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
    const {index, value, label, indexStyle, labelStyle, valueStyle} = this.props;
    return (
      <div style={itemStyles.container}>
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
};

BarList.propTypes = {
  title: PropTypes.string,
  datas: PropTypes.array,
  titleStyle: PropTypes.object,
  indexStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  valueStyle: PropTypes.object,
};

export default BarList;