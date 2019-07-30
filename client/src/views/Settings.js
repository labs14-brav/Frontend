/**
 * Dependencies
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { DeactivateAccountButton, SettingsNavBar } from '../components/index'

/**
 * Define view
 */

function Settings() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 bg-brav-secondary">
          <h3>Brav</h3>
        </div>

        <div className="col-9 bg-brav">
          <SettingsNavBar />
          <h1 className="text-center">My Settings</h1>

          <Link to="/users/mediator-registration" >Register as Mediator</Link>
          <DeactivateAccountButton />
        </div>
      </div>
    </div>
  );
}

/**
 * Export view
 */

export default Settings
