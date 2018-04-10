import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';

import App from './App';
import store from './ducks/store';

import './index.css';

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>, document.getElementById('root'));

