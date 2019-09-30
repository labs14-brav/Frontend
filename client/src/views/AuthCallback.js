/**
 * Dependencies
 */

import React from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

/**
 * Define view
 */

function AuthCallback({ authenticateUser, history }) {
  // firebase.auth().onAuthStateChanged(async user => {
  //   // User is signed in.
  //   if (user) {
  //     const token = await user.getIdToken();
  //     localStorage.setItem("token", token);
  //     const requestData = {
  //       user,
  //       token
  //     };
  //     // call log in action creator here
  //     // pass in an object with user and token
  //     const path = await authenticateUser(requestData);
  //     history.push(path);
  //   } else {
  //     // User is signed out.
  //     history.push("/users/login");
  //   }
  // });

  return <div className="login" />;
}

/**
 * Export view
 */

export default connect(
  null, null
)(withRouter(AuthCallback));
