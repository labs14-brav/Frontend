/**
 * Dependencies
 */

import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '../helpers/index';

/**
 * Define view
 */

function Login(props) {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  async function auth0LoginWithRedirect() {
    if (isAuthenticated) return <Redirect to="/home" />

    await loginWithRedirect({
      // Used to store state before doing the redirect.
      appState: { targetUrl: props.history.location.pathname },
      // The default URL where Auth0 will redirect your browser to with the
      // authentication result. Be sure to have this whitelisted in the
      // "Allowed Callback URLs" field in your Auth0 Application's settings.
      "redirect_uri": (process.env.NODE_ENV === 'production') ? "http://www.beabravone.com/home" : "http://localhost:3000/home",
    });
  }

  if (!loading) auth0LoginWithRedirect()

  return (
    <div className="App">
      <h1>Login</h1>
    </div>
  )
};

/**
 * Export view
 */

export default Login;
