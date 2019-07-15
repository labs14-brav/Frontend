/**
 * Dependencies
 */

import React from 'react';
import { useAuth0 } from '../helpers/index';

/**
 * Define view
 */

function Login(props) {
  useAuth0.login()

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
