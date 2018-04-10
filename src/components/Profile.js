import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('profile props', this.props)
    return (
      <div className='Profile'>
        I am the profile component
        {this.props.differentUsername}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    differentUsername: reduxState.username
  }
}
export default connect(mapStateToProps)(Profile);