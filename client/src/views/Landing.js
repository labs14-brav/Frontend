/**
 * Dependencies
 */

import React from 'react';
import { NavBar } from '../components/index';
import { mixpanel } from '../helpers/index';


/**
 * Define view
 */

function Landing(props) {
  mixpanel.track('Visited landing page');

  return (
    <div className="App">
      <NavBar login={''} />

      <div className="container">
        <div className="row">
          <div className="col-12 py-3">
            <h1>Brāv</h1>
      
          </div>
        </div>
      </div>
    </div>
  )
};

/**
 * Export view
 */

export default Landing;
