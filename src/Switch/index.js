import React, {Component, PropTypes} from 'react';

const styles = {
  container: {
    width: '46px',
    height: '28px',
    borderRadius: '30px',
    position: 'relative',
  },
  button: {
    width: '27px',
    height: '27px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    border: '2px solid #fff',
    position: 'absolute',
    left: 'auto',
    right: '0px',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 10px 0px rgba(0, 0, 0, 0.08)'
  }
};

class Switch extends Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.nativeEvent.stopImmediatePropagation();
    this.props.onClick(!this.props.value);
  }

  render() {
    const isActive = this.props.value;
    const {activeColor} = this.props;
    return (
      <div onClick={this.onClick} style={Object.assign({}, styles.container, isActive? {backgroundColor: activeColor}: {backgroundColor: '#cbcbcb'})}>
        <div style={Object.assign({}, styles.button, isActive? {border: '2px solid '+activeColor}: {border: '2px solid #cbcbcb', left: '0px', right: 'auto'})}></div>
      </div>
    );
  }
}
Switch.defaultProps = {
  value: true,
  onClick: () => {},
  activeColor: 'rgb(22, 175, 203)'
};
Switch.propTypes = {
  value: PropTypes.bool,
  onClick: PropTypes.func
};

export default Switch;