/**
 * Dependencies
 */

import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { NavBar } from '../components/index';

/**
 * Define view
 */

function Landing(props) {
  return (
    <div className="App">
      <NavBar login={props.login} />

      <div className="container">
        <div className="row">
          <div className="col-12 py-3">
            <h1>Brāv</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Export view
 */

export default Landing
