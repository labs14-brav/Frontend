/**
 * Dependencies
 */

import React from "react";
import firebase from "firebase";
import { authenticateUser } from "../store/actions";
import { connect } from "react-redux";

/**
 * Define view
 */

function AuthCallback({ authenticateUser }) {
  firebase.auth().onAuthStateChanged(async user => {
    // User is signed in.
    if (user) {
      let token = await user.getIdToken();
      localStorage.setItem("token", token);
      const requestData = {
        user,
        token
      };
      authenticateUser(requestData);
      // call log in action creator here
      // pass in an object with user and token
    } else {
      // User is signed out.
      window.location = "/users/login";
    }
  });

  return <div className="login" />;
}

/**
 * Export view
 */

export default connect(
  null,
  { authenticateUser }
)(AuthCallback);
