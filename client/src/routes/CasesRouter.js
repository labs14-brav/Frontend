/**
 * Dependencies
 */

import React from 'react';
import { PrivateRoute } from './helpers/index';
import { Search, ErrorBoundary } from '../views/index';
import uuid from 'uuid';
import CaseForm from '../views/CaseForm'

/**
 * Define router
 */

const RootRouter = [

  <PrivateRoute key={uuid.v4()}  path="/cases/new" component={CaseForm} errorBoundary={ErrorBoundary} />,
  <PrivateRoute key={uuid.v4()} path="/cases/:id/mediator-search" component={Search} errorBoundary={ErrorBoundary} />
  
];

/**
 * Export router
 */

export default RootRouter;
