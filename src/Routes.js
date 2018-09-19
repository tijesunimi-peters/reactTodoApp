import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import App from './App';
import Store from './Store';


export default () => {
  return <Provider store={Store}>
    <Router>
      <App>
        <Route component={Home} path='/' />
      </App>
    </Router>
  </Provider>
}