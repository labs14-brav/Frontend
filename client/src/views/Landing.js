/**
 * Dependencies
 */

import React from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import NavBar from "../components/NavBar";
import { useAuth0 } from "../react-auth0-wrapper";

/**
 * Define view
 */

function Landing() {
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // if (isAuthenticated) {
  //   console.log('Redirected')
  //   return <Redirect path="/home" />
  // }

  return (
    <div className="App">
      <NavBar />
      <h1>Brav</h1>
    </div>
  )
}

/**
 * Export view
 */

export default Landing
