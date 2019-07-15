/**
 * Dependencies
 */

import auth0 from 'auth0-js';
import axios from 'axios';
import history from './history';

/**
 * Constants
 */

const AUTH_CONFIG = {
  "domain": "brav.auth0.com",
  "clientID": "kOeKAq6ue5IChNwFzJwzpwT7oGMzqHGd",
  "redirectUri": (process.env.NODE_ENV === 'production') ? "http://www.beabravone.com/home" : "http://localhost:3000/home"
}

/**
 * Define helper
 */

class Auth {
  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientID,
    redirectUri: AUTH_CONFIG.redirectUri,
    responseType: 'token id_token',
    scope: 'openid profile read:username',
  });

  constructor() {
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
    localStorage.removeItem('account_type');
    localStorage.removeItem('userID');
    localStorage.removeItem('firstName');
    localStorage.removeItem('isBoarded');
    localStorage.clear();

    this.auth0.logout({
      returnTo: window.location.origin
    });

    setTimeout(() => {
      history.replace('/');
    }, 1000);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace('/');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  /**
   * Check if current time is past the access token's expiry time.
   */

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('token', authResult.idToken);

    // Set the time that the access token will expire at
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    const user = authResult.idTokenPayload;

    // Comment to work locally
    axios.post(`${process.env.REACT_APP_API_URL}/users/signup`, user)
      .then(async res => {
        console.log(res.data);

        if (
          (res.data.isBoarded && res.data.isBoarded === 0) ||
          res.data.isBoarded === false
        ) {
          // navigate to the onboarding route
          await localStorage.setItem('userID', res.data.id);
          history.replace('/onboarding');
        } else if (
          (res.data.isBoarded && res.data.isBoarded === 1) ||
          res.data.isBoarded === true
        ) {
          if (res.data.account_type === 'homeowner') {
            // navigate to the homeowner dashboard route
            localStorage.setItem('userID', res.data.id);
            localStorage.setItem('firstName', res.data.first_name);
            history.replace(
              `/dashboard-homeowner/users/${res.data.id}/projects/`
            );
          } else if (res.data.account_type === 'contractor') {
            localStorage.setItem('userID', res.data.id);
            localStorage.setItem('firstName', res.data.first_name);
            // navigate to the contractor dashboard route
            history.replace(`/dashboard-contractor/projects/`);
          }
        } else {
          history.replace('/onboarding');
        }
      })
      .catch(err => console.log(err.message));
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log(err);
        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
      }
    });
  }
}

/**
 * Define client
 */

const client = new Auth();

/**
 * Export helper
 */

export default client;
