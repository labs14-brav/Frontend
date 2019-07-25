/**
 * Dependencies
 */

import React, { useState } from 'react';

/**
 * Define component
 */

const NavBar = (props) => {

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
