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
  "redirectUri": (process.env.NODE_ENV === 'production') ? "http://www.beabravone.com/home" : "http://localhost:3000/home",
  "backend_url": process.env.BACKEND_URL || "http://localhost:5000"
}

/**
 * Define helper
 */

class Auth {
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
    this.idToken = null;
    this.accessToken = null;
    this.expiresAt = null;

    localStorage.clear();

    this.auth0.logout({ returnTo: window.location.origin });

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
        console.error(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  isAuthenticated() {
    // Check if current time is past the access token's expiry time.
    return new Date().getTime() < this.expiresAt;
  }

  async setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('token', authResult.idToken);

    // Set the time that the access token will expire at
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    const user = authResult.idTokenPayload;

    try {
      const res = await axios.post(`${AUTH_CONFIG.backend_url}/users/signup`, user);

      history.replace('/home');
    } catch(err) {
      console.error(err)
    }
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.error(err);
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
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
