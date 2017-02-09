import React, {Component} from 'react';
import Knob from '../src/Knob';

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px',
    backgroundColor: '#fff',
  },
};

class TestPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={Object.assign({}, styles.container)}>
        <Knob/>
      </div>
    );
  }
}

export default TestPage;