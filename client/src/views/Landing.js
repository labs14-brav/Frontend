/**
 * Dependencies
 */

import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';

/**
 * Define view
 */

function Landing(props) {
  return (
    <div className="App">
      <NavBar login={props.login} />
      <h1>Brav</h1>
    </div>
  )
}

/**
 * Export view
 */

export default Landing
