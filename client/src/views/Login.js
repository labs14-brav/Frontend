/**
 * Dependencies
 */

import React from 'react';
import { Redirect } from 'react-router-dom';
import { firebase } from '../helpers/index';


/**
 * Define view
 */

function Login(props) {

  firebase();

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Login</h1>
            <div id='firebaseui-auth-container'></div>
            <div id='loader'></div>
          </div>
        </div>
      </div>
    </div>
  )
};

/**
 * Export view
 */

export default Login;
