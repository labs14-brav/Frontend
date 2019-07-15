/**
 * Dependencies
 */

import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import {
  RootRouter,
  UsersRouter,
} from './routes/index';

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
        <Switch>
          {RootRouter}
          {UsersRouter}
        </Switch>
      </BrowserRouter>
    );
  }
};

/**
 * Export component
 */

export default App;
