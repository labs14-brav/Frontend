/**
 * Dependencies
 */

import React from "react";

/**
 * Define component
 */

const NavBar = (props) => {
  return (
    <div>
      <button onClick={props.login}>Login</button>
    </div>
  );
};

/**
 * Export component
 */

export default NavBar;
