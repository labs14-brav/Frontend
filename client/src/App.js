/**
 * Dependencies
 */

import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { RootRouter, UsersRouter, NoMatchRouter } from './routes/index';
import { Auth0Context } from './contexts/index'

/**
 * Import global styles
 */

import './App.scss';

/**
 * Define component
 */

function App() {
  return (
    <Auth0Context.Provider>
      <BrowserRouter>
        <Switch>
          {RootRouter}
          {UsersRouter}
          {NoMatchRouter}
        </Switch>
      </BrowserRouter>
    </Auth0Context.Provider>
  );
};

/**
 * Export component
 */

export default App;
