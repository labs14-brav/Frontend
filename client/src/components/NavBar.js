/**
 * Dependencies
 */

import React from 'react';

/**
 * Define component
 */

const NavBar = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex justify-content-end py-3">
          <button onClick={props.login}>Login</button>
        </div>
      </div>
    </div>
  );
};

/**
 * Export component
 */

export default NavBar;
