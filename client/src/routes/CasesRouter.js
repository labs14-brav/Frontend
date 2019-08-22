/**
 * Dependencies
 */

import uuid from 'uuid';
import React from 'react';
import { PrivateRoute } from './helpers/index';
import {
  Search,
  ErrorBoundary,
  NewCase,
  UserCaseShow,
  MediatorCasesShow,
  CourtForm,
  OutsideCourtForm,
} from '../views/index';

/**
 * Define router
 */

const RootRouter = [
    <PrivateRoute key={uuid.v4()} exact path='/cases'
        component={UserCaseShow}
        errorBoundary={ErrorBoundary}
    />,
    <PrivateRoute key={uuid.v4()} exact path='/cases/new'
        component={NewCase}
        errorBoundary={ErrorBoundary}
    />,
    <PrivateRoute key={uuid.v4()} path='/cases/new/court'
        component={CourtForm}
        errorBoundary={ErrorBoundary}
    />,
    <PrivateRoute key={uuid.v4()} path='/cases/new/outside'
        component={OutsideCourtForm}
        errorBoundary={ErrorBoundary}
    />,
    <PrivateRoute key={uuid.v4()} exact path='/mediator-cases'
        component={MediatorCasesShow}
        errorBoundary={ErrorBoundary}
    />,
    <PrivateRoute key={uuid.v4()} path='/cases/:id/mediator-search'
        component={Search}
        errorBoundary={ErrorBoundary}
    />,
];

/**
 * Export router
 */

export default RootRouter;
