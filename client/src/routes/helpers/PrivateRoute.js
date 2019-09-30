/**
 * Dependencies
 */

import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import uuid from "uuid";

/**
 * Define route component
 */

const PrivateRoute = ({
  errorBoundary: ErrorBoundary,
  component: Component,
  ...rest
}) => {
  // Check for logged in state in redux

  return (
    <Route
      {...rest}
      render={props => {
        if (rest.user) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

/**
 * Export route component
 */

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
