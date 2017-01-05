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
};

class WaterDashboard extends Component {

  render() {
    return (
      <div className="water-dashboard" style={styles.container}>
        <div className="welcome">
          <div className="wave" style={{backgroundImage: 'url('+bg+')'}}></div>  
          <div className="wave-block"></div>      
        </div>
        <span className="water-dashboard-content-text" style={Object.assign({}, styles.valueText, this.props.valueStyle)}>
          20
        </span>
      </div>
    );
  }
}

export default WaterDashboard;