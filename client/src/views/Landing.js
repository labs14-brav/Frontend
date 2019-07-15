/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/index';
import createAuth0Client from '@auth0/auth0-spa-js';

/**
 * Define view
 */

function Landing() {
  const [auth0, setAuth0] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function Auth() {
      const options = {
        // *REQUIRED
        // The Client ID found on your Application settings page
        "client_id": "kOeKAq6ue5IChNwFzJwzpwT7oGMzqHGd",
        // *REQUIRED
        // Your Auth0 account domain such as 'example.auth0.com' or when using
        // a custom domain 'auth.mycompany.com'.
        "domain": "brav.auth0.com",
        // *Optional
        // Maximum allowable elasped time (in seconds) since authentication.
        // If the last time the user authenticated is greater than this value,
        // the user must be reauthenticated. (1 year = 31557600 seconds)
        "max_age": "31557600",
        // *Optional
        // The default URL where Auth0 will redirect your browser to with the
        // authentication result. Be sure to have this whitelisted in the
        // "Allowed Callback URLs" field in your Auth0 Application's settings.
        "redirect_uri": (process.env.NODE_ENV === 'production') ? "http://www.beabravone.com/home" : "http://localhost:3000/home",
        // *Optional
        // The default scope to be used on authentication requests.
        "scope": "openid profile read:username",
      }

      const auth0 = await createAuth0Client(options);
      setAuth0(auth0)
      console.log('auth0', auth0);

      // Returns true if there's valid information stored, otherwise returns false.
      const isAuthenticated = await auth0.isAuthenticated()
      setIsAuthenticated(isAuthenticated);
      console.log('isAuthenticated', isAuthenticated) //=> false

      if (window.location.search.includes("code=")) {
        const { appState } = await auth0.handleRedirectCallback();
        console.log('appState', appState)
        window.history.replaceState({}, document.title, '/home')
      }

      setLoading(false);
    }

    Auth();
  }, []);

  if (!loading) {
    auth0.loginWithRedirect({
      // *Optional
      // The default URL where Auth0 will redirect your browser to with the
      // authentication result. Be sure to have this whitelisted in the
      // "Allowed Callback URLs" field in your Auth0 Application's settings.
      "redirect_uri": (process.env.NODE_ENV === 'production') ? "http://www.beabravone.com/home" : "http://localhost:3000/home",
    });
  }

  return (
    <div className="App">
      <NavBar login={null} />

      <div className="container">
        <div className="row">
          <div className="col-12 py-3">
            <h1>Brāv</h1>
          </div>
        </div>
      </div>
    </div>
  )
};

/**
 * Export view
 */

export default Landing;
