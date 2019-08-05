/**
 * Dependencies
 */

import React, { useEffect } from 'react';
import firebase from 'firebase';
import axios from 'axios';

/**
 * Define component
 */

function AuthCallback(props) {
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
        
        if(res.data.type === 'mediator') {
          window.location = '/mediator-cases'
        } else {
          window.location = '/cases'
        }
      }).catch(err => {
        console.error(err)
        window.location = '/users/login'
      })
    } else {
      // User is signed out.
      window.location = '/users/login'
    }
  });

  return (
    <div className="login">
      
    </div>
  )
};

/**
 * Export view
 */

export default AuthCallback;
