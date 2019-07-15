/**
 * Dependencies
 */

import React, { useState, useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import uuid from 'uuid';
import { Auth0Context } from '../../contexts/index';
import { UserContext } from '../../contexts/index';

/**
 * Define route component
 */

const PrivateRoute = ({ component: Component, errorBoundary: ErrorBoundary, path, exact }) => {
  const { isAuthenticated, loginWithRedirect } = useContext(Auth0Context);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  console.error('PrivateRoute.user', user);

  function clearUser() {
    localStorage.removeItem('user');
    setUser(null);
  }

  useEffect(() => {
    const ensureAuthenticated = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect({
          appState: { targetUrl: path }
        });
      }
    };

    ensureAuthenticated();
  }, [isAuthenticated, loginWithRedirect, path]);

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
