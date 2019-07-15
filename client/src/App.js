/**
 * Dependencies
 */

import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { RootRouter, UsersRouter, NoMatchRouter } from './routes/index';
import { Auth0Provider } from './helpers/index'

/**
 * Import global styles
 */

import './App.scss';

/**
 * Define component
 */

function App() {
  return (
    <Auth0Provider>
      <BrowserRouter>
        <Switch>
          {RootRouter}
          {UsersRouter}
          {NoMatchRouter}
        </Switch>
      </BrowserRouter>
    </Auth0Provider>
  );
};

/**
 * Export component
 */

export default App;
