/**
 * Dependencies
 */

import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import NavBar from "../components/NavBar";
import { useAuth0 } from "../react-auth0-wrapper";

/**
 * Define view
 */

function Landing() {
  const { isAuthenticated, loading, setLoading } = useAuth0();

  console.log('isAuthenticated', isAuthenticated)

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
