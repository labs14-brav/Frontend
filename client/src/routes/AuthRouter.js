/**
 * Dependencies
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './helpers/index';
import { ErrorBoundary, AuthCallback, Login, Landing} from '../views/index';
import uuid from 'uuid';

/**
 * Define router
 */

const AuthRouter = [
  <Route key={uuid.v4()} exact path="/" component={Landing} />,
  <Route key={uuid.v4()} exact path='/auth' component={Login} />,
  <PrivateRoute key={uuid.v4()} exact path="/auth/callback" component={AuthCallback} errorBoundary={ErrorBoundary} />,
  <Redirect to='/' />,
];

/**
 * Export router
 */

export default AuthRouter;
