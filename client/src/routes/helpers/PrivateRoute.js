/**
 * Dependencies
 */

import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import uuid from 'uuid';
import { UserContext } from '../../contexts/index';

/**
 * Define route component
 */

const PrivateRoute = ({ component: Component, errorBoundary: ErrorBoundary, path, exact }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  let token = localStorage.getItem("token")

  function clearUser() {
    localStorage.removeItem('user')
    setUser(null)
  }

  if (!user) return <Redirect to="/users/login" />

  if (exact) {
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
