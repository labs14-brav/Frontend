/**
 * Dependencies
 */

import React from "react";
import { Route } from "react-router-dom";
import uuid from "uuid";

/**
 * Define route component
 */

const PrivateRoute = ({
  component: Component,
  errorBoundary: ErrorBoundary,
  path,
  exact
}) => {
  // Check for logged in state in redux
  if (exact) {
    return (
      <Route
        key={uuid.v4()}
        exact
        path={path}
        render={props => (
          <ErrorBoundary>
            <Component {...props} />
          </ErrorBoundary>
        )}
      />
    );
  } else {
    return (
      <Route
        key={uuid.v4()}
        path={path}
        render={props => (
          <ErrorBoundary>
            <Component {...props} />
          </ErrorBoundary>
        )}
      />
    );
  }
};

/**
 * Export route component
 */

export default PrivateRoute;
