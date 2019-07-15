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
    return <Route key={uuid.v4()} exact path={path} render={props => (
      <UserContext.Provider value={user}>
        <ErrorBoundary>
          <Component {...props} setUser={setUser} />
        </ErrorBoundary>
      </UserContext.Provider>
    )} />
  } else {
    return <Route key={uuid.v4()} path={path} render={props => (
      <UserContext.Provider value={user}>
        <ErrorBoundary>
          <Component {...props} setUser={setUser} />
        </ErrorBoundary>
      </UserContext.Provider>
    )} />
  }
};

/**
 * Export route component
 */

export default PrivateRoute;
