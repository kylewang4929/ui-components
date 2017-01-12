import React, {Component} from 'react';
import PowerPage from '../src/PowerPage';

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
        <PowerPage/>
      </div>
    );
  }
}

export default TestPage;