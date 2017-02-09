import React, {Component, PropTypes} from 'react';

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
    fontSize: '30px',
  },
  unit: {
    fontSize: '12px',
    marginLeft: '4px',
    color: 'rgba(255,255,255,0.6)'
  }
};

class InfoPanel extends Component {
  render() {
    const {lineStyle, data, labelStyle, valueStyle, unitStyle} = this.props;
    let infoData = Object.assign([], data);
    if(infoData.length>4){
      infoData = infoData.slice(0, 4);
    }

    let lineDom = null;
    if(infoData.length > 1 && infoData.length <= 2){
      lineDom = (<div style={{...styles.verticalLine, ...lineStyle}}></div>);
    }

    if(infoData.length > 2){
      lineDom = [
        (<div key="border1" style={{...styles.verticalLine, ...lineStyle}}></div>),
        (<div key="border2" style={{...styles.horizontalLine}}></div>)
      ];
    }

    return (
      <div style={styles.container}>
        <div style={styles.inner}>
          
          {
            data.map((item, index) => {

              let padding = {};
              if(index < 2){
                padding = {
                  paddingTop: '10px',
                  paddingBottom: '10px'
                }
              }else{
                padding = {
                  paddingTop: '20px',
                  paddingBottom: '6px'
                }
              }

              return (
                <div style={{...styles.item, ...padding}} key={index}>
                  <div style={{...styles.label, ...labelStyle}}>{item.label}</div>                
                  <div style={{...styles.value, ...valueStyle}}>
                    {item.value}
                    <span style={{...styles.unit, ...unitStyle}}>{item.unit}</span>
                  </div>
                </div>
              );
            })
          }
          
          {lineDom}

        </div>
      </div>
    );
  }
}

InfoPanel.defaultProps = {
  data: [],
  lineStyle: {},
  labelStyle: {},
  valueStyle: {},
  unitStyle: {},
};

InfoPanel.propTypes = {
  data: PropTypes.array,
  lineStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  valueStyle: PropTypes.object,
  unitStyle: PropTypes.object,
};
export default InfoPanel;