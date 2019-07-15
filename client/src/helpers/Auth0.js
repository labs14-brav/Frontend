/**
 * Dependencies
 */

import React, { useState, useEffect, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

/**
 * Constants
 */

const auth0ClientOptions = {
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
};

/**
 * Export context
 */

export const Auth0Context = React.createContext();

/**
 * Export context value
 */

export const useAuth0 = () => useContext(Auth0Context);

/**
 * Export context provider
 */

export const Auth0Provider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    async function initAuth0() {
      const auth0FromHook = await createAuth0Client(auth0ClientOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes("code=")) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        window.history.replaceState({}, document.title, window.location.pathname);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    };

    initAuth0();
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    console.log('handleRedirectCallback')
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };

  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (args) => auth0Client.getIdTokenClaims(args),
        loginWithRedirect: (args) => auth0Client.loginWithRedirect(args),
        getTokenSilently: (args) => auth0Client.getTokenSilently(args),
        getTokenWithPopup: (args) => auth0Client.getTokenWithPopup(args),
        logout: (args) => auth0Client.logout(args)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
