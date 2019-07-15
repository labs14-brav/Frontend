/**
 * Dependencies
 */

import React, { useState, useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth0_legacy } from '../../helpers/index';
import uuid from 'uuid';

/**
 * Define route component
 */

const PrivateRoute = ({ component: Component, errorBoundary: ErrorBoundary, path, exact }) => {
  if (!auth0_legacy.isAuthenticated()) {
    auth0_legacy.logout()
    return <Redirect to="/" />
  }

  if (exact) {
    return <Route key={uuid.v4()} exact path={path} render={props => (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    )} />
  } else {
    return <Route key={uuid.v4()} path={path} render={props => (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    )} />
  }
};

/**
 * Export route component
 */

export default PrivateRoute;
