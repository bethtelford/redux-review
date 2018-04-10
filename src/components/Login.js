import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { updateUsername } from './../ducks/reducer';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    console.log('login props', this.props)
    return (
      <div className='Login'>
        <input value={this.state.username} onChange={e => this.setState({username: e.target.value})} />
        <input value={this.state.password} onChange={e => this.setState({password: e.target.value})} />
        <Link to='/profile' onClick={this.props.updateUsername(this.state.username)}>Login</Link>
      </div>
    )
  }
}
export default connect(null, {updateUsername})(Login);


