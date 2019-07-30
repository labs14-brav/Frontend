/**
 * Dependencies
 */

import React from 'react';
import { PrivateRoute } from './helpers/index';
import { Search, CaseShow, ErrorBoundary, CaseForm,UserCaseShow} from '../views/index';
import { CaseDetails, CourtForm, OutsideCourtForm } from '../components/index';
import uuid from 'uuid';


/**
 * Define router
 */

const RootRouter = [
  <PrivateRoute key={uuid.v4()}  exact path="/cases/" component={UserCaseShow} errorBoundary={ErrorBoundary} />,
  <PrivateRoute key={uuid.v4()} path="/cases/new" component={CaseForm} errorBoundary={ErrorBoundary} />,
  <PrivateRoute key={uuid.v4()} path="/cases/:id/mediator-search" component={Search} errorBoundary={ErrorBoundary} />,
  <PrivateRoute key={uuid.v4()} path="/cases/:id" component={CaseDetails} errorBoundary={ErrorBoundary} />,
  <PrivateRoute key={uuid.v4()} path="/cases/new/court" component={CourtForm} errorBoundary={ErrorBoundary} />,
  <PrivateRoute key={uuid.v4()} path="/cases/new/outside" component={OutsideCourtForm} errorBoundary={ErrorBoundary} />
];

/**
 * Export router
 */

export default RootRouter;
