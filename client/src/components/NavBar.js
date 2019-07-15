/**
 * Dependencies
 */

import React, { useState } from 'react';
// import { useAuth0 } from '../helpers/index';

/**
 * Define component
 */

const NavBar = (props) => {
  // const { isAuthenticated } = useAuth0();
  // {isAuthenticated ?
  //   <button onClick={props.logout}>Logout</button> :
  //   <button onClick={props.login}>Login</button>
  // }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-end py-3">
          {props.logout ? <button onClick={props.logout}>Logout</button> : null}
          {props.login ? <button onClick={props.login}>Login</button> : null}
        </div>
      </div>
    </div>
  );
};

/**
 * Export component
 */

export default NavBar;
