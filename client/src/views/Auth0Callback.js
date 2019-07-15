/**
 * Dependencies
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth0_legacy } from '../helpers/index'

/**
 * Define view
 */

function Auth0Callback() {
  useEffect(() => {
    auth0_legacy.handleAuthentication()
  })

  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-12">
          <h1>Callback</h1>

          <Link to="/" className="btn btn-md btn-primary">Return to main page</Link>
        </div>
      </div>
    </div>
  )
};

/**
 * Export view
 */

export default Auth0Callback;
