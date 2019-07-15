/**
 * Dependencies
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import uuid from 'uuid';
import { UserContext } from '../../contexts/index';

/**
 * Define route component
 */

const PrivateRoute = ({ component: Component, errorBoundary: ErrorBoundary, path, exact }) => {
  let token = localStorage.getItem("token")

  if (is_exact) {
    return (
      <Route exact path={path} render={props => (token) ? <Component {...props} /> : <Redirect to="/" />} />
    )
  } else {
    return (
      <Route path={path} render={props => (token) ? <Component {...props} /> : <Redirect to="/" />} />
    )
  }
};

/**
 * Export route component
 */

export default PrivateRoute;
