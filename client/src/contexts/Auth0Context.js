/**
 * Dependencies
 */

import React, { useState, useEffect, useContext } from 'react';
import createAuth0Client from "@auth0/auth0-spa-js";

/**
 * Define context provider
 */

const Auth0Context = React.createContext({
  isAuthenticated,
  user,
  loading,
  popupOpen,
  loginWithPopup,
  handleRedirectCallback,
  getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
  loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
  getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
  getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
  logout: (...p) => auth0Client.logout(...p)
});

/**
 * Export context provider
 */

export default Auth0Context;
