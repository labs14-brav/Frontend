/**
 * Dependencies
 */

import React, { useState } from 'react';
import { useAuth0 } from '../helpers/index';

/**
 * Define component
 */

const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, loading } = useAuth0();

  console.log('NavBar.isAuthenticated', isAuthenticated)

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-end py-3">
          {isAuthenticated ?
            <button onClick={props.logout}>Logout</button> :
            <button onClick={props.login}>Login</button>
          }
        </div>
      </div>
    </div>
  );
};

/**
 * Export component
 */

export default NavBar;
