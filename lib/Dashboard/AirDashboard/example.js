import React, {Component} from 'react';
import AirDashboard from './index';

const styles = {
  container: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    marginTop: '-150px'
  }
};

class AirDashboardExample extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        <AirDashboard value={12}/>
      </div>
    );
  }
}

export default AirDashboardExample;
