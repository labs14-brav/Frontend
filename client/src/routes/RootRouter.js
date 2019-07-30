/**
 * Dependencies
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './helpers/index';
import { Landing, Home, ErrorBoundary,AdminHome } from '../views/index';
import uuid from 'uuid';

/**
 * Define router
 */

const RootRouter = [
  <Route key={uuid.v4()} exact path="/" component={Landing} />,
  <Route key={uuid.v4()} path="/signin" render={() => <Redirect to="/users/login" />} />,
  <Route key={uuid.v4()} path="/login" render={() => <Redirect to="/users/login" />} />,
  <Route key={uuid.v4()} path="/signup" render={() => <Redirect to="/users/login" />} />,
  <Route key={uuid.v4()} path="/register" render={() => <Redirect to="/users/login" />} />,
  <PrivateRoute key={uuid.v4()}  path="/home" component={Home} errorBoundary={ErrorBoundary} />,
  <PrivateRoute key={uuid.v4()}  path='/admin' component={AdminHome} errorBoundary={ErrorBoundary} />,
];

/**
 * Export router
 */

export default RootRouter;
