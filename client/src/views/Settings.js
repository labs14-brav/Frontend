/**
 * Dependencies
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { DeactivateAccountButton, SettingsNavBar } from '../components/index';
import { styled } from '@material-ui/styles';

/**
 * Define styles
 */

const Header = styled('h1')({
  textAlign: 'center',
  padding: '50px 0px',
})

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
          <Header>My Settings</Header>

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
