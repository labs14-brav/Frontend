/**
 * Dependencies
 */

import React from 'react';
import { NavBar } from '../components/index';
import { auth0_legacy, mixpanel } from '../helpers/index';

/**
 * Define view
 */

function Landing(props) {
  mixpanel.track('Visited landing page');
  // const { loginWithRedirect } = useAuth0();
  //
  // async function auth0LoginWithRedirect() {
  //   await loginWithRedirect({
  //     // Used to store state before doing the redirect.
  //     appState: { targetUrl: props.history.location.pathname },
  //     // The default URL where Auth0 will redirect your browser to with the
  //     // authentication result. Be sure to have this whitelisted in the
  //     // "Allowed Callback URLs" field in your Auth0 Application's settings.
  //     "redirect_uri": (process.env.NODE_ENV === 'production') ? "http://www.beabravone.com/home" : "http://localhost:3000/home",
  //   });
  // }

  return (
    <div className="App">
      <NavBar login={auth0_legacy.login} />

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
