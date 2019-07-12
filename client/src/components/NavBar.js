/**
 * Dependencies
 */

import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";

/**
 * Define component
 */

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};

/**
 * Export component
 */

export default NavBar;
