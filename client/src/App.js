/**
 * Dependencies
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RootRouter } from './routes/index';
import Auth from './components/Auth';

/**
 * Import global styles
 */

import './App.scss';

/**
 * Define auth client
 */

const auth = new Auth();

/**
 * Define component
 */

class App extends React.Component {
  login = () => {
    auth.login();
  };

  logout = () => {
    setTimeout(() => {
      auth.logout();
    }, 1000);
  };

  render() {
    return (
      <BrowserRouter>
        <RootRouter mount="/" login={this.login} logout={this.logout} />
      </BrowserRouter>
    );
  }
}

/**
 * Export component
 */

export default App;
