/**
 * Dependencies
 */

import React, { useState, useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import uuid from 'uuid';
import { UserContext } from '../../contexts/index';
import { useAuth0, Auth0Context, Auth0Provider } from '../../helpers/index';

/**
 * Define route component
 */

const PrivateRoute = ({ component: Component, errorBoundary: ErrorBoundary, path, exact }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  function clearUser() {
    localStorage.removeItem('user');
    setUser(null);
  }

  useEffect(() => {
    const ensureAuthenticated = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect({
          // The default URL where Auth0 will redirect your browser to with the
          // authentication result. Be sure to have this whitelisted in the
          // "Allowed Callback URLs" field in your Auth0 Application's settings.
          "redirect_uri": (process.env.NODE_ENV === 'production') ? "http://www.beabravone.com/home" : "http://localhost:3000/home",
        });
      }
    };

    console.log('loading', loading)
    if (!loading) ensureAuthenticated();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

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
