import React, {Component} from 'react';
import WaterDashboard from './index';

const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    marginTop: '-150px'
  }
};

class WaterDashboardExample extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div style={styles.container}>
        <WaterDashboard/>
      </div>
    );
  }
}

export default WaterDashboardExample;
