/**
 * Dependencies
 */

import React, { useState, useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import uuid from 'uuid';

/**
 * Define route component
 */

const PrivateRoute = ({ component: Component, errorBoundary: ErrorBoundary, path, exact }) => {

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
