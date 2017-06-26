import React, {Component} from 'react';
import Slider from '../src/Slider';
import ColorPick from '../src/ColorPick';

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    top: '0px',
    backgroundColor: '#909090',
    height: '1000px'
  },
};

class TestPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      radius: 120
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        radius: 150
      });
    }, 1000);
  }

  onChange = (value) => {
    console.log(value);
  }

  render() {
    const {radius} = this.state;
    return (
      <div style={Object.assign({}, styles.container)}>
        <ColorPick disable={false} onChange={this.onChange} radius={140}/>
      </div>
    );
  }
}

export default TestPage;