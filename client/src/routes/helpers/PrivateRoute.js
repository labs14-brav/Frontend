/**
 * Dependencies
 */

import React from 'react';
import { Route } from 'react-router-dom';
import firebase from 'firebase';
import uuid from 'uuid';
import axios from 'axios';

/**
 * Define route component
 */

const PrivateRoute = ({ component: Component, errorBoundary: ErrorBoundary, path, exact }) => {
  firebase.auth().onAuthStateChanged(async (user) => {
    // User is signed in.
    if (user) {
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;

      let token = await user.getIdToken();

      localStorage.setItem('token', token);

      axios.post(`${process.env.REACT_APP_API_URL}/users/auth`, {
        user: user,
        token: token
      }).then(res => {
        localStorage.setItem('type', res.data.type);
        localStorage.setItem('id', res.data.id);
        localStorage.setitem('uid', res.data.uid);
        localStorage.setItem('is_stripe_connected', res.data.is_stripe_connected);
      }).catch(err => {
        console.error(err)
      })
    } else {
      // User is signed out.
      // ...
    }
  });

  if (exact) {
    return <Route key={uuid.v4()} exact path={path} render={props => (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    )} />
  } else {
    return <Route key={uuid.v4()} path={path} render={props => (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    )} />
  }
};

/**
 * Export route component
 */

export default PrivateRoute;
