import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateUsername} from './../ducks/reducer';

class Dummy extends Component {
  render() {
    return (
      <div className='Dummy'>
        I am the dummy Component
        <br/>
        {this.props.testProp}
        {this.props.pizza}
        <button onClick={() => this.props.updateUsername('pizza')} > Change</button>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    pizza: state.username
  }
}

export default connect(mapStateToProps, {updateUsername})(Dummy)


