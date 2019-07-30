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

const HeaderH1 = styled('h1')({
  textAlign: 'center',
  padding: '50px 0px',
})

const HeaderH2 = styled('h2')({
  textAlign: 'center',
  padding: '10px 0px',
  color: 'white',
})

/**
 * Define view
 */

function Settings() {
  return (
    <div className="row">
      <div className="col-2 bg-brav-secondary">
        <HeaderH2>Brāv</HeaderH2>
      </div>

      <div className="col-10 bg-brav">
        <SettingsNavBar />
        <HeaderH1>My Settings</HeaderH1>

        <Link to="/users/mediator-registration" >Register as Mediator</Link>
        <DeactivateAccountButton />
      </div>
    </div>
  );
}

/**
 * Export view
 */

export default Settings
