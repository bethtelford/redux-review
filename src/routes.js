import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './components/Login';
import Profile from './components/Profile';

export default (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route path='/profile' component={Profile} />
  </Switch>
)