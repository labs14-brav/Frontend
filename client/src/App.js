/**
 * Dependencies
 */

import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { RootRouter, UsersRouter, NoMatchRouter } from './routes/index';

/**
 * Import global styles
 */

import './App.scss';

/**
 * Define component
 */

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {RootRouter}
        {UsersRouter}
        {NoMatchRouter}
      </Switch>
    </BrowserRouter>
  );
};

/**
 * Export component
 */

export default App;
