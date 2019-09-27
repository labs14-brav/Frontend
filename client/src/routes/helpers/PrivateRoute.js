/**
 * Dependencies
 */

import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import uuid from "uuid";

/**
 * Define route component
 */

const PrivateRoute = ({ errorBoundary: ErrorBoundary, component: Component }, ...props) => {
  // Check for logged in state in redux
  if (props.user) {
    return (
      <Route
        key={uuid.v4()}
        exact
        path={props.path}
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
        path={props.path}
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

const mapStateToProps = (state) => {
  console.log(state.authReducer.user);
  return {
    user: state.authReducer.user
  }
}

export default connect(mapStateToProps, null)(PrivateRoute);
