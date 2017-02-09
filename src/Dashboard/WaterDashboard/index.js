import React, {Component, PropTypes} from 'react';

require('./style.css');
const bg = require('./wave.png');

const styles = {
  container: {
    position: 'relative',
    width: '210px',
    height: '210px',
    margin: 'auto'
  },
  background: {
    color: '#fff'
  },
  unit: {
    fontSize: '12px',
    color: '#a7a7a7',
    position: 'absolute',
    display: 'block',
    textAlign: 'center',
    width: '100%',
    top: '50%',
    marginTop: '24px'
  }
};

class WaterDashboard extends Component {

  render() {
    const {value, unit, valueStyle, unitStyle, waveColor} = this.props;
    return (
      <div className="water-dashboard" style={styles.container}>
        <div className="welcome">
          <div className="wave" style={{backgroundColor: waveColor}}></div>  
          <div className="wave-block" style={{backgroundColor: waveColor}}></div>      
        </div>
        <span className="water-dashboard-content-text" style={Object.assign({}, styles.valueText, valueStyle)}>
          {value}
        </span>
        <span style={Object.assign({}, styles.unit, unitStyle)}>
          {unit}
        </span>
      </div>
    );
  }
}

WaterDashboard.defaultProps = {
  value: 10,
  unit: 'TDS',
  valueStyle: {},
  unitStyle: {},
  waveColor: '#0cdaff',
};
export default WaterDashboard;