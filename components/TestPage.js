import React, {Component} from 'react';
import WaterDashboard from '../src/Dashboard/WaterDashboard';

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px',
    backgroundColor: 'rgb(22, 175, 203)',
  },
};

class TestPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={Object.assign({}, styles.container)}>
        <WaterDashboard value="1" unit="TDS"/>
      </div>
    );
  }
}

export default TestPage;