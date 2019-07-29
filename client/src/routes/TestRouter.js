/**
 * Dependencies
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from './helpers/index';
import { Search, ErrorBoundary } from '../views/index';
import uuid from 'uuid';

/**
 * Define router
 */

const TestRouter = [
  <Route key={uuid.v4()} path="/cases/:id/mediator-search" component={Search} errorBoundary={ErrorBoundary} />,
];

/**
 * Export router
 */

export default TestRouter;
