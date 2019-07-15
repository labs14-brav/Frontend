/* eslint no-restricted-globals: 0 */

/**
 * Dependencies
 */

import auth0 from 'auth0-js';
import axios from 'axios';

/**
 * Constants
 */

const LOGIN_SUCCESS_PAGE = "/home"
const LOGIN_FAILURE_PAGE = "/"
const LOGOUT_PAGE = "/"

let callback_url
switch (process.env.NODE_ENV) {
  case 'production':
    callback_url = 'http://www.beabravone.com/users/callback'
    break;
  case 'staging2':
    callback_url = 'https://brav-staging2.netlify.com/users/callback'
    break;
  case 'staging':
    callback_url = 'https://brav-staging.netlify.com/users/callback'
    break;
  default:
    callback_url = 'http://localhost:3000/users/callback'
    break;
}

const AUTH_CONFIG = {
  "domain": "brav.auth0.com",
  "clientId": "kOeKAq6ue5IChNwFzJwzpwT7oGMzqHGd",
  "callbackUrl": callback_url,
}

let users_signup_url
switch (process.env.NODE_ENV) {
  case 'production':
    users_signup_url = 'https://bravproduction.herokuapp.com'
    break;
  case 'staging2':
    users_signup_url = 'https://brav-staging2.herokuapp.com'
    break;
  case 'staging':
    users_signup_url = 'https://brav-staging.herokuapp.com'
    break;
  default:
    users_signup_url = 'http://localhost:8080'
    break;
}

/**
 * Define helper
 */

class Auth0Legacy {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    scope: 'openid email profile read:username',
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    console.log('handleAuthentication')
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        this.setSession(authResults)
      } else if (err) {
        console.error(err);
        location.pathname = LOGIN_FAILURE_PAGE;
      }
    });
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    console.log('setSession')
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()));

    // Set the time that the access token will expire at
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);

    const user = authResult.idTokenPayload;

    axios.post(`${users_signup_url}/users/signup`, user, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": authResult.idToken
      }
    }).then(async res => {
        await localStorage.setItem('userID', res.data.id);
        location.hash = "";
        location.pathname = LOGIN_SUCCESS_PAGE;
      })
      .catch(err => console.error(err.message));
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.error(err);
      }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.clear();

    this.auth0.logout({
      returnTo: window.location.origin
    });

    // navigate to the home route
    setTimeout(() => {
      location.hash = "";
      location.pathname = LOGOUT_PAGE;
    }, 1000);
  }

  isAuthenticated() {
    // Check whether the current time is past the access token's expiry time.
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }
}

/**
 * Create auth0 client
 */

const auth0_legacy = new Auth0Legacy()

/**
 * Export helper
 */

export default auth0_legacy;
