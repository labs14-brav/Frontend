/**
 * Dependencies
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Home } from '../views/index';
// import { PrivateRoute } from './helpers/index';

/**
 * Define router
 */

function RootRouter() {
  // <PrivateRoute path="/home" component={Home} />
  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={Home} />
      <Route path="/login" render={() => <Redirect to="/users/signin" />} />
      <Route path="/signin" render={() => <Redirect to="/users/signin" />} />
      <Route path="/signup" render={() => <Redirect to="/users/signup" />} />
      <Route path="/register" render={() => <Redirect to="/users/signup" />} />
    </>
  )
};

/**
 * Export router
 */

export default RootRouter;
