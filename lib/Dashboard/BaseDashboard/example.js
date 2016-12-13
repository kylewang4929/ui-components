import React, {Component} from 'react';
import BaseDashboard from './index';

const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    marginTop: '-150px'
  },
  icon: {
    width: '12px',
    marginRight: '6px',
    position: 'absolute',
    top: '2px',
    left: '0px'
  }
};

const heating = require('./icon_refrigeration_cold.png');

class BaseDashboardExample extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    const tips = (<span>制冷中<img style={styles.icon} src={heating} /></span>);

    return (
      <div style={styles.container}>
        <BaseDashboard tips={tips} value={12} them='cold'/>
      </div>
    );
  }
}

export default BaseDashboardExample;
