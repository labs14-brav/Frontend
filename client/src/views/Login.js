/**
 * Dependencies
 */

import React from 'react';
import { auth } from '../helpers/index';

/**
 * Define view
 */

function Login(props) {
  auth.login()

  return (
    <div className="App">
      <h1>Login</h1>
    </div>
  )
};

/**
 * Export view
 */

export default Login;
