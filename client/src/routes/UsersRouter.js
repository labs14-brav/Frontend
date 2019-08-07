/**
 * Dependencies
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './helpers/index';
import { Settings, MediatorRegistration, ErrorBoundary, AdminHome  } from '../views/index';
import uuid from 'uuid';

/**
 * Define router
 */

const UsersRouter = [
  <Route key={uuid.v4()} exact path='/users' render={() => <Redirect to='/' />} />,
  <Route key={uuid.v4()}  path='/users/settings' render={(props) => <Settings {...props} />} />,
  <Route key={uuid.v4()}  path='/users/mediator-registration' render={(props) => <MediatorRegistration {...props} />} />,
  <PrivateRoute key={uuid.v4()}   path='/admin' component={AdminHome} errorBoundary={ErrorBoundary} />,
];

/**
 * Export router
 */

export default UsersRouter;
